import renderTitle from '@/utils/renderTitle';
import { PrismaClient, Review } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  reviews: Review[];
  open_time: string;
  close_time: string;
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const restaurantTitle = renderTitle(params.slug);

  return {
    title: `${restaurantTitle} Restaurant | OpenTable`,
    description: 'Book a table at your favorite restaurant',
  };
}

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
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    notFound();
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
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="relative w-[27%] text-reg">
        <ReservationCard
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
        />
      </div>
    </>
  );
}
export default RestaurantDetails;
