import Link from 'next/link';
import AuthModal from './AuthModal';

function NavBar() {
  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable{' '}
      </Link>
      <div>
        <div className="flex">
          <AuthModal isSignIn />
          <AuthModal isSignIn={false} />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
