'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const onSearch = () => {
    router.push(`/search`);
  };

  return (
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
  );
}
export default SearchBar;
