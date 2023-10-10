import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export const metadata: Metadata = {
  title: 'Search Restaurants OpenTable',
  description: 'Book a table at your favorite restaurant',
};

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!city) {
    return prisma.restaurant.findMany({ select });
  }

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

async function Search({ searchParams }: { searchParams: { city: string } }) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  return (
    <>
      <Header />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length === 0 && (
            <div className="mt-10 text-center text-3xl font-bold">
              No restaurants found
            </div>
          )}
          {restaurants.length > 0 &&
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
      </div>
    </>
  );
}
export default Search;
