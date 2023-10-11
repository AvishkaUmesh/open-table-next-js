import { Review } from '@prisma/client';
import ReviewCard from './ReviewCard';

function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h1 className="borber-b mb-7 mt-10 pb-5 text-3xl font-bold">
        What {reviews.length}{' '}
        {reviews.length === 1 ? 'person is ' : 'people are '}
        saying
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
export default Reviews;
