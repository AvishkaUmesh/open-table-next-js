import Link from 'next/link';

function RestaurantCard() {
  return (
    <div className="flex border-b pb-5">
      <img
        src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="mb-2 flex">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex text-reg font-light">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milesstone-grill">View more information</Link>
        </div>
      </div>
    </div>
  );
}
export default RestaurantCard;
