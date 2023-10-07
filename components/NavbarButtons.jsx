'use client'

import Image from 'next/image'
import React from 'react'
import Menu from './Menu'

import { useStateContext } from '@/context/ContextProvider'
import Cart from './Cart'
import Profile from './Profile'
import FavList from './FavList'

const NavbarButtons = () => {

  const { activeMenu, activeCart, activeProfile, activeFavList, setActiveMenu, setActiveCart, setActiveProfile, setActiveFavList } = useStateContext()

  return (
    <>
      <div className='flex-center gap-6 md:gap-12'>
        <button onClick={() => setActiveProfile(true)} type='button' className='hidden md:block'>
          <Image src="/profile-icon.svg" width={28} height={28} alt='menu icon' className='object-contain'/>
        </button>
        <button type='button' className='hidden md:block'>
          <Image src="/search-icon.svg" width={28} height={28} alt='menu icon' className='object-contain'/>
        </button>
        <button onClick={() => setActiveFavList(true)} type='button' className='hidden md:block'>
          <Image src="/heart-icon.svg" width={28} height={28} alt='menu icon' className='object-contain'/>
        </button>
        <button onClick={() => setActiveCart(true)} type='button'>
          <Image src="/cart-icon.svg" width={28} height={28} alt='menu icon' className='object-contain'/>
        </button>
      </div>
      <button type='button' onClick={() => setActiveMenu(true)} className='md:hidden'>
        <Image src="icon-hamburger.svg" width={28} height={28} alt='menu icon' className='object-contain'/>
      </button>
      { activeMenu && <Menu /> }
      { activeCart && <Cart /> }
      { activeProfile && <Profile /> }
      { activeFavList && <FavList /> }
    </>
  )
}

export default NavbarButtons