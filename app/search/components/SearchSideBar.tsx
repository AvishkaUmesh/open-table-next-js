import { Cuisine, Location, PRICE } from '@prisma/client';
import Link from 'next/link';
import { SearchParams } from '../page';

function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParams;
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
      className: 'w-full rounded-l border p-2 text-center text-reg font-light',
    },
    {
      price: PRICE.REGULAR,
      label: '$$',
      className: 'w-full border p-2 text-center text-reg font-light',
    },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
      className: 'w-full rounded-r border p-2 text-center text-reg font-light',
    },
  ];

  return (
    <div className="w-1/5 pr-4">
      <div className="flex flex-col border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: { ...searchParams, city: location.name },
            }}
            key={location.id}
            className="text-reg font-light capitalize"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 flex flex-col border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.id}
            className="text-reg font-light capitalize"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ price, label, className }) => (
            <Link
              key={price}
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price: price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SearchSideBar;
