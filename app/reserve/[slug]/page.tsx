import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Form from './components/Form';
import Header from './components/Header';

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: 'Reserve at Milestones Restaurant | OpenTable',
  description: 'Book a table at your favorite restaurant',
};

const fetchRestaurant = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });
  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

async function Reserve({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; time: string; partySize: string };
}) {
  const restaurant = await fetchRestaurant(params.slug);

  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header
          image={restaurant.main_image}
          name={restaurant.name}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
        <Form
          slug={params.slug}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
      </div>
    </div>
  );
}
export default Reserve;
