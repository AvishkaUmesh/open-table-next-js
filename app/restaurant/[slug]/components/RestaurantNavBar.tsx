import Link from 'next/link';

function RestaurantNavBar({ slug }: { slug: string }) {
  return (
    <nav className="flex border-b pb-2 text-reg">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
export default RestaurantNavBar;
