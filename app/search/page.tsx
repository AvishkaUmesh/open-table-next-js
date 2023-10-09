import Link from 'next/link';

function Search() {
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
        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
          <div className="m-auto flex justify-center py-3 text-left text-lg">
            <input
              className="mr-3  w-[450px] rounded p-2"
              type="text"
              placeholder="State, city or town"
            />
            <button className="rounded bg-red-600 px-9 py-2 text-white">
              Let&apos;s go
            </button>
          </div>
        </div>
        <div className="m-auto flex w-2/3 items-start justify-between py-4">
          {/* SEARCH SIDE BAR */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Region</h1>
              <p className="text-reg font-light">Toronto</p>
              <p className="text-reg font-light">Ottawa</p>
              <p className="text-reg font-light">Montreal</p>
              <p className="text-reg font-light">Hamilton</p>
              <p className="text-reg font-light">Kingston</p>
              <p className="text-reg font-light">Niagara</p>
            </div>
            <div className="mt-3 border-b pb-4">
              <h1 className="mb-2">Cuisine</h1>
              <p className="text-reg font-light">Mexican</p>
              <p className="text-reg font-light">Italian</p>
              <p className="text-reg font-light">Chinese</p>
            </div>
            <div className="mt-3 pb-4">
              <h1 className="mb-2">Price</h1>
              <div className="flex">
                <button className="w-full rounded-l border p-2 text-reg font-light">
                  $
                </button>
                <button className="w-full border-b border-r border-t p-2 text-reg font-light">
                  $$
                </button>
                <button className="w-full rounded-r border-b border-r border-t p-2 text-reg font-light">
                  $$$
                </button>
              </div>
            </div>
          </div>
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
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
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
}
export default Search;
