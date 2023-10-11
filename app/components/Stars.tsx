import calcReviewRatingAvg from '@/utils/calcReviewRatingAvg';
import { Review } from '@prisma/client';
import Image from 'next/image';
import emptyStar from '../../public/empty-star.png';
import fullStar from '../../public/full-star.png';
import halfStar from '../../public/half-star.png';

function Stars({ reviews, rating }: { reviews: Review[]; rating?: number }) {
  const reviewRating = rating || calcReviewRatingAvg(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) {
        stars.push(fullStar);
      } else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) {
          stars.push(emptyStar);
        } else if (difference > 0.2 && difference <= 0.6) {
          stars.push(halfStar);
        } else {
          stars.push(fullStar);
        }
      } else {
        stars.push(emptyStar);
      }
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars().map((star, index) => (
        <Image src={star} key={index} className="mr-1 h-4 w-4" alt="star" />
      ))}
    </div>
  );
}
export default Stars;
