'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-4 p-4 bg-gray-800">
      <Link
        className={`px-4 py-2 rounded-md text-white ${pathname === '/' ? 'bg-blue-600' : 'hover:bg-blue-500'}`}
        href="/"
      >
        Home
      </Link>

      <Link
        className={`px-4 py-2 rounded-md text-white ${pathname === '/anime' ? 'bg-blue-600' : 'hover:bg-blue-500'}`}
        href="/anime"
      >
        Anime
      </Link>
    </nav>
  )
}
