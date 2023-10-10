import Price from '@/app/components/Price';
import { Cuisine, Location, PRICE } from '@prisma/client';
import Link from 'next/link';

interface RestaurantType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
}

function RestaurantCard({ restaurant }: { restaurant: RestaurantType }) {
  return (
    <div className="flex border-b pb-5">
      <img
        src={restaurant.main_image}
        alt="restaurant_image"
        className="h-36 w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="mb-2 flex">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex text-reg font-light">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
export default RestaurantCard;
