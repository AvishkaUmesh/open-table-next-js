import Link from 'next/link';

function RestaurantNavBar() {
  return (
    <nav className="flex border-b pb-2 text-reg">
      <Link href="/restaurant/milesstone-grill" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milesstone-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
export default RestaurantNavBar;
