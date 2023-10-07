'use client'

import { useStateContext } from '@/context/ContextProvider'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import { useState } from 'react'

const Menu = () => {

  const { setActiveMenu } = useStateContext()

  return (
    <>
      <div className='md:hidden absolute bg-black/70  min-h-screen w-screen top-0 right-0 z-50 transition-all' />
      <div className='md:hidden absolute w-96 pt-10 max-w-full bg-white text-slate-100 right-0 top-0 z-50 transition-all max-h-screen overflow-y-scroll'>
        <button className='text-5xl block absolute right-5 top-5' onClick={() => setActiveMenu(false)}>
          <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
        </button>
        <ul className='text-lg flex flex-col'>
            <li className='hover:bg-secondary hover:text-primary body-text text-font-clr p-8'>
                <Link href='/' onClick={() => setActiveMenu(false)}>Home</Link>
            </li>
            <li className='hover:bg-secondary hover:text-primary body-text text-font-clr p-8'>
                <Link href='/' onClick={() => setActiveMenu(false)}>Shop</Link>
            </li>
            <li className='hover:bg-secondary hover:text-primary body-text text-font-clr p-8'>
              <Link href='/' >Support</Link>
            </li>
            <li className='hover:bg-secondary hover:text-primary body-text text-font-clr p-8'>
                <Link href='/'>Contact</Link>
            </li>
            <li className='hover:bg-secondary hover:text-primary body-text text-font-clr p-8'>
                <Link href='/'>Profile</Link>
            </li>
            <li className='hover:bg-secondary hover:text-primary body-text text-font-clr p-8'>
                <Link href='/'>Favuorites</Link>
            </li>
            <li className='hover:bg-secondary hover:text-primary body-text text-font-clr p-8'>
                <Link href='/'>Search</Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Menu