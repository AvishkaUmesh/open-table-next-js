'use client';

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthenticationContext } from '../context/AuthContext';
import AuthModal from './AuthModal';

function NavBar() {
  const { user, loading } = useContext(AuthenticationContext);

  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable{' '}
      </Link>
      <div>
        <div className="flex">
          {!loading && user && (
            <button
              className=" mr-3  rounded border bg-blue-400 p-1 px-4 text-white"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          )}
          {!loading && !user && (
            <>
              <AuthModal isSignIn />
              <AuthModal isSignIn={false} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
