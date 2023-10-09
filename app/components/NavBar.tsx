import Link from 'next/link';

function NavBar() {
  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
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
  );
}
export default NavBar;
