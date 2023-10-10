'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState<string>('');

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!location) {
      return;
    }
    router.push(`/search?city=${location}`);
    setLocation('');
  };

  return (
    <div className="m-auto flex justify-center py-3 text-left text-lg">
      <form onSubmit={onSearch}>
        <input
          className="mr-3  w-[450px] rounded p-2"
          type="text"
          placeholder="State, city or town"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="rounded bg-red-600 px-9 py-2 text-white"
          type="submit"
        >
          Let&apos;s go
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
