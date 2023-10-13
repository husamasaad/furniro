'use client'

import { useStateContext } from '@/context/ContextProvider'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import { RxHeart, RxMagnifyingGlass } from 'react-icons/rx'
import { TiMessages } from 'react-icons/ti'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineShop, AiOutlineHome } from 'react-icons/ai'

const Menu = () => {

  const { setActiveMenu, setActiveFavList } = useStateContext()

  return (
    <>
      <div className='md:hidden fixed bg-black/70  min-h-screen w-screen top-0 right-0 z-50 transition-all' />
      <div className='md:hidden fixed w-96 pt-10 max-w-full bg-white text-slate-100 right-0 top-0 z-50 transition-all max-h-screen overflow-y-scroll'>
        <div className='flex-between px-10'>
          <Link href='/'>
            <Image src="/logo.png" alt="logo" width={158} height={40} className='object-contain h-9 w-fit' />
          </Link>
          <button className='text-5xl ' onClick={() => setActiveMenu(false)}>
            <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
          </button>
        </div>
        <ul className='text-lg flex flex-col border-t mt-10'>
            <li className='body-text text-font-clr p-8 flex gap-6 items-center'>
                <AiOutlineHome className='text-4xl' />
                <Link href='/' onClick={() => setActiveMenu(false)}>Home</Link>
            </li>
            <li className='body-text text-font-clr p-8 flex gap-6 items-center'>
                <AiOutlineShop className='text-4xl' />
                <Link href='/shop' onClick={() => setActiveMenu(false)}>Shop</Link>
            </li>
            <li className='body-text text-font-clr p-8 flex gap-6 items-center'>
              <BiSupport className='text-4xl' />
              <Link href='/' >Support</Link>
            </li>
            <li className='body-text text-font-clr p-8 flex gap-6 items-center'>
                <TiMessages className='text-4xl' />
                <Link href='/'>Contact</Link>
            </li>
            <li onClick={() => {
              setActiveMenu(false)
              setActiveFavList(true)
            }} className='body-text text-font-clr p-8 flex gap-6 items-center'>
                <RxHeart className='text-4xl' />
                <Link>Saved</Link>
            </li>
            <li className='body-text text-font-clr p-8 flex gap-6 items-center'>
                <RxMagnifyingGlass className='text-4xl' />
                <Link href='/'>Search</Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Menu