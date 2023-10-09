'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const onSearch = () => {
    router.push(`/search`);
  };

  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* NAVBAR */}
        <nav className="flex justify-between bg-white p-2">
          <a href="" className="text-2xl font-bold text-gray-700">
            {' '}
            OpenTable{' '}
          </a>
          <div>
            <div className="flex">
              <button className="mr-3 rounded border bg-blue-400 p-1 px-4 text-white">
                Sign in
              </button>
              <button className="rounded border p-1 px-4 ">Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="mt-10 text-center">
              <h1 className="mb-2 text-5xl font-bold text-white">
                Find your table for any occasion
              </h1>
              {/* SEARCH BAR */}
              <div className="m-auto flex justify-center py-3 text-left text-lg">
                <input
                  className="mr-3  w-[450px] rounded p-2"
                  type="text"
                  placeholder="State, city or town"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button
                  className="rounded bg-red-600 px-9 py-2 text-white"
                  onClick={onSearch}
                >
                  Let&apos;s go
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */} {/* CARDS */}
          <div className="mt-10 flex flex-wrap justify-center px-36 py-3">
            {/* CARD */}
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
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
