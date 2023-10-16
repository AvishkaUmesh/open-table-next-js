import { findAvailableTables } from '@/services/restaurant/findAvailableTables';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const errors: string[] = [];

    const { slug, day, time, partySize } = req.query as {
      slug: string;
      day: string;
      time: string;
      partySize: string;
    };

    const {
      bookerEmail,
      bookerFirstName,
      bookerLastName,
      bookerPhone,
      bookerRequest,
      bookerOccasion,
    } = req.body;

    const validationSchema = [
      {
        valid: validator.isLength(bookerFirstName, { min: 3, max: 20 }),
        errorMessage: 'First name should be between 3 and 20 characters',
      },
      {
        valid: validator.isLength(bookerLastName, { min: 3, max: 20 }),
        errorMessage: 'Last name should be between 3 and 20 characters',
      },
      {
        valid: validator.isEmail(bookerEmail),
        errorMessage: 'Email is not valid',
      },
      {
        valid: validator.isMobilePhone(bookerPhone),
        errorMessage: 'Phone number is not valid',
      },
    ];

    validationSchema.forEach((validation) => {
      if (!validation.valid) {
        errors.push(validation.errorMessage);
      }
    });

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        tables: true,
        open_time: true,
        close_time: true,
      },
    });

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    if (!day || !time || !partySize) {
      return res.status(400).json({ message: 'Missing query parameters' });
    }

    if (
      new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
      new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
    ) {
      return res.status(400).json({ message: 'Invalid time' });
    }

    const searchTimesWithTables = await findAvailableTables({
      time,
      day,
      res,
      restaurant,
    });

    if (!searchTimesWithTables) {
      return res.status(400).json({ message: 'Invalid time' });
    }

    const searchTimeWithTables = searchTimesWithTables.find((t) => {
      return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
    });

    if (!searchTimeWithTables) {
      return res.status(400).json({ message: 'No availability' });
    }

    const tablesCount: {
      2: number[];
      4: number[];
    } = {
      2: [],
      4: [],
    };

    searchTimeWithTables.tables.forEach((table) => {
      if (table.seats === 2) {
        tablesCount[2].push(table.id);
      } else {
        tablesCount[4].push(table.id);
      }
    });

    const tablesToBooks: number[] = [];
    let seatsRemaining = parseInt(partySize);

    while (seatsRemaining > 0) {
      if (seatsRemaining >= 3) {
        if (tablesCount[4].length) {
          tablesToBooks.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining -= 4;
        } else {
          tablesToBooks.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining -= 2;
        }
      } else {
        if (tablesCount[2].length) {
          tablesToBooks.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining -= 2;
        } else {
          tablesToBooks.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining -= 4;
        }
      }
    }

    const booking = await prisma.booking.create({
      data: {
        number_of_people: parseInt(partySize),
        booking_time: new Date(`${day}T${time}`),
        booker_email: bookerEmail,
        booker_phone: bookerPhone,
        booker_first_name: bookerFirstName,
        booker_last_name: bookerLastName,
        booker_occasion: bookerOccasion,
        booker_request: bookerRequest,
        restaurant_id: restaurant.id,
      },
    });

    const bookingsOnTablesData = tablesToBooks.map((table_id) => {
      return {
        table_id,
        booking_id: booking.id,
      };
    });

    await prisma.bookingsOnTables.createMany({
      data: bookingsOnTablesData,
    });

    return res.status(200).json({ booking });
  } else {
    return res.status(400).json({ message: 'Invalid method' });
  }
}
