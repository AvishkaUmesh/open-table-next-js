'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Header() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const onSearch = () => {
    router.push(`/search`);
  };
  return (
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
  );
}
export default Header;
