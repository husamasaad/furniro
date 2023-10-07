'use client';

import { Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { Link } from 'nextjs13-progress';
import NavbarButtons from './NavbarButtons';


const NavbarComponent = () => {
  return (
    <nav className='bg-white x-paddings py-8'>
      <div className="flex-between flex-wrap gap-y-6 mx-auto">
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width={158} height={40} className='object-contain h-6 sm:h-9 w-fit mx-auto' />
        </Link>
        <ul className='hidden md:flex-center gap-12'>
            <li className='body-text text-font-clr hover:text-primary'>
              <Link href='/'>Home</Link> </li>
            <li className='body-text text-font-clr hover:text-primary'>
              <Link href='/'>Shop</Link> </li>
            <li className='body-text text-font-clr hover:text-primary'>
              <Link href='/'>About</Link> </li>
            <li className='body-text text-font-clr hover:text-primary'>
              <Link href='/'>Contact</Link></li>
        </ul>
        <div className='flex gap-6'>
          <NavbarButtons />
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent