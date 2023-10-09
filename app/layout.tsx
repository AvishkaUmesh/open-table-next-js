import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenTable',
  description: 'Book a table at your favorite restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen w-screen bg-gray-100">
          <main className="m-auto max-w-screen-2xl bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
