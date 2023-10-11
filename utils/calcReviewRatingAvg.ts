import { Review } from '@prisma/client';

const calcReviewRatingAvg = (reviews: Review[]): number => {
  if (!reviews.length) return 0;

  return reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length;
};

export default calcReviewRatingAvg;
