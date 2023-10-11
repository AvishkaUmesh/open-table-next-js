import Price from '@/app/components/Price';
import Stars from '@/app/components/Stars';
import calcReviewRatingAvg from '@/utils/calcReviewRatingAvg';
import { Cuisine, Location, PRICE, Review } from '@prisma/client';
import Link from 'next/link';

interface RestaurantType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
  reviews: Review[];
}

function RestaurantCard({ restaurant }: { restaurant: RestaurantType }) {
  const renderRatingText = () => {
    const rating = calcReviewRatingAvg(restaurant.reviews);
    if (rating === 0) {
      return 'No reviews yet';
    }
    if (rating > 4) {
      return 'Excellent';
    }
    if (rating <= 4 && rating > 3) {
      return 'Very Good';
    }
    if (rating <= 3 && rating > 2) {
      return 'Good';
    }
    if (rating <= 2 && rating > 1) {
      return 'Fair';
    }
  };

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
          <div className="mb-2 flex">
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
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
