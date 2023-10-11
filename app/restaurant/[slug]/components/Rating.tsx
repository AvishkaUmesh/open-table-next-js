import Stars from '@/app/components/Stars';
import calcReviewRatingAvg from '@/utils/calcReviewRatingAvg';
import { Review } from '@prisma/client';

function Rating({ reviews }: { reviews: Review[] }) {
  const rating = calcReviewRatingAvg(reviews).toFixed(1);

  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="ml-3 text-reg">{rating}</p>
      </div>
      <div>
        <p className="ml-4 text-reg">
          {reviews.length} Review{reviews.length === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
}
export default Rating;
