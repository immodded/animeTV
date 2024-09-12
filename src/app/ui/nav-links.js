'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import siteConfig from '@/app/site.config.js'; // Adjust the import path as needed

export function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Brand */}
        <div className="text-white text-xl font-bold">
          {siteConfig.title}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            className={`block px-4 py-2 mt-2 rounded-md text-white md:mt-0 ${pathname === '/' ? 'bg-blue-600' : 'hover:bg-blue-500'}`}
            href="/"
          >
            Home
          </Link>

          <Link
            className={`block px-4 py-2 mt-2 rounded-md text-white md:mt-0 ${pathname === '/anime' ? 'bg-blue-600' : 'hover:bg-blue-500'}`}
            href="/anime"
          >
            Anime
          </Link>
        </div>
      </div>
    </nav>
  );
}
