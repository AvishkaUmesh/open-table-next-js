import { PRICE, PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

export const metadata: Metadata = {
  title: 'Search Restaurants OpenTable',
  description: 'Book a table at your favorite restaurant',
};

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (searchParams: SearchParams) => {
  const where: {
    location?: { name: { equals: string } };
    cuisine?: { name: { equals: string } };
    price?: { equals: PRICE };
  } = {};

  if (searchParams.city) {
    where.location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
  }
  if (searchParams.cuisine) {
    where.cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
  }
  if (searchParams.price) {
    where.price = {
      equals: searchParams.price,
    };
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return await prisma.location.findMany();
};

const fetchCuisines = async () => {
  return await prisma.cuisine.findMany();
};

async function Search({ searchParams }: { searchParams: SearchParams }) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
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
