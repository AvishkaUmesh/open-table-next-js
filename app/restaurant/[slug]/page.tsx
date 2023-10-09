import Link from 'next/link';

function RestaurantDetails() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* NAVBAR */}
        <nav className="flex justify-between bg-white p-2">
          <Link href="/" className="text-2xl font-bold text-gray-700">
            {' '}
            OpenTable{' '}
          </Link>
          <div>
            <div className="flex">
              <button className="mr-3 rounded border bg-blue-400 p-1 px-4 text-white">
                Sign in
              </button>
              <button className="rounded border p-1 px-4">Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */} {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
            <h1 className="captitalize text-shadow text-center text-7xl text-white">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <nav className="flex border-b pb-2 text-reg">
              <Link href="/restaurant/milesstone-grill" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/milesstone-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="text-6xl font-bold">Milesstone Grill</h1>
            </div>
            {/* TITLE */} {/* RATING */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="ml-3 text-reg">4.9</p>
              </div>
              <div>
                <p className="ml-4 text-reg">600 Reviews</p>
              </div>
            </div>
            {/* RATING */} {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                The classics you love prepared with a perfect twist, all served
                up in an atmosphere that feels just right. That’s the Milestones
                promise. So, whether you’re celebrating a milestone, making the
                most of Happy Hour or enjoying brunch with friends, you can be
                sure that every Milestones experience is a simple and perfectly
                memorable one.
              </p>
            </div>
            {/* DESCRIPTION */} {/* IMAGES */}
            <div>
              <h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="mb-1 mr-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                  alt=""
                />
                <img
                  className="mb-1 mr-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                  alt=""
                />
                <img
                  className="mb-1 mr-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                  alt=""
                />
                <img
                  className="mb-1 mr-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                  alt=""
                />
                <img
                  className="mb-1 mr-1 h-44 w-56"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* IMAGES */} {/* REVIEWS */}
            <div>
              <h1 className="borber-b mb-7 mt-10 pb-5 text-3xl font-bold">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="mb-7 border-b pb-7">
                  <div className="flex">
                    <div className="flex w-1/6 flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
                        <h2 className="text-2xl text-white">MJ</h2>
                      </div>
                      <p className="text-center">Micheal Jordan</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="mr-5 flex">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Laurie was on top of everything! Slow night due to the
                          snow storm so it worked in our favor to have more one
                          on one with the staff. Delicious and well worth the
                          money.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <div className="relative w-[27%] text-reg">
            <div className="fixed w-[15%] rounded bg-white p-3 shadow">
              <div className="border-b pb-2 text-center font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select name="" className="border-b py-3 font-light" id="">
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex w-[48%] flex-col">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="w-28 border-b py-3 font-light"
                  />
                </div>
                <div className="flex w-[48%] flex-col">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="border-b py-3 font-light">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="h-16 w-full rounded bg-red-600 px-4 font-bold text-white">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{' '}
        {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>
  );
}
export default RestaurantDetails;
