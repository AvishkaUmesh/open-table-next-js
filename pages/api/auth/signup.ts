import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as jose from 'jose';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, city, password } = req.body;
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(firstName, { min: 3, max: 20 }),
        errorMessage: 'First name should be between 3 and 20 characters',
      },
      {
        valid: validator.isLength(lastName, { min: 3, max: 20 }),
        errorMessage: 'Last name should be between 3 and 20 characters',
      },
      {
        valid: validator.isEmail(email),
        errorMessage: 'Email is not valid',
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: 'Phone number is not valid',
      },
      {
        valid: validator.isLength(city, { min: 1, max: 20 }),
        errorMessage: 'City should be between 1 and 20 characters',
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: 'Password is not strong enough',
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

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userWithEmail) {
      return res.status(400).json({ errors: ['Email already exists'] });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        city: city,
        password: hashedPassword,
      },
    });

    const alg = 'HS256';
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: user.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime('2h')
      .sign(secret);

    res.status(200).json({ token });
  }

  return res.status(404).json('Unknown endpoint');
}
