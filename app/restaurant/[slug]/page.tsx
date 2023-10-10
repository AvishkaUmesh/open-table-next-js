import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import Description from './components/Description';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

export const metadata: Metadata = {
  title: 'Milestones Restaurant | OpenTable',
  description: 'Book a table at your favorite restaurant',
};

const prisma = new PrismaClient();

const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error('Restaurant not found');
  }

  return restaurant;
};

async function RestaurantDetails({ params }: { params: { slug: string } }) {
  const restaurant = await fetchRestaurant(params.slug);

  return (
    <>
      <div className="w-[70%] rounded bg-white p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <div className="relative w-[27%] text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
export default RestaurantDetails;
