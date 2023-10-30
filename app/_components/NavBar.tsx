import Link from 'next/link';
import React from 'react';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <nav className='flex justify-between items-center h-14 border-b'>
      <Link
        href='/'
        className='ml-4'
      >
        Logo
      </Link>
      <ul className='flex gap-4 mr-4'>
        {links.map((link) => (
          <li key={link.path + link.label}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
