'use client';
import Image from 'next/image';
import errorMascot from '../public/error.png';
import Header from './components/Header';

function Error({ error }: { error: Error }) {
  return (
    <main>
      <Header />
      <div className="mt-10 flex flex-wrap justify-center px-36 py-3">
        <Image src={errorMascot} alt="error" className="mb-8 w-56" />
        <div className="rounded bg-white px-9 py-14 shadow">
          <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
          <p className="text-reg font-bold">{error.message}</p>
          <p className="mt-6 text-sm font-light">Error Code: 404</p>
        </div>
      </div>
    </main>
  );
}
export default Error;
