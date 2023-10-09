import Link from 'next/link';

function RestaurantCard() {
  return (
    <div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
      <Link href="/restaurant/milesstone-grill">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
          alt=""
          className="h-36 w-full"
        />
        <div className="p-1">
          <h3 className="mb-2 text-2xl font-bold">Milestones Grill</h3>
          <div className="flex items-start">
            <div className="mb-2 flex">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
export default RestaurantCard;
