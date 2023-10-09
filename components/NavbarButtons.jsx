'use client'

import Image from 'next/image'
import React from 'react'
import Menu from './Menu'

import { useStateContext } from '@/context/ContextProvider'
import Cart from './Cart'
import Profile from './Profile'
import FavList from './FavList'
import { RxAvatar, RxMagnifyingGlass, RxHeart, RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavbarButtons = () => {

  const { activeMenu, activeCart, activeProfile, activeFavList, setActiveMenu, setActiveCart, setActiveProfile, setActiveFavList } = useStateContext()

  return (
    <>
      <div className='flex-center gap-6 md:gap-12'>
        <button onClick={() => setActiveProfile(true)} type='button' className='hidden md:block text-3xl hover:text-primary'>
          <RxAvatar />
        </button>
        <button type='button' className='hidden md:block text-3xl hover:text-primary'>
          <RxMagnifyingGlass />
        </button>
        <button onClick={() => setActiveFavList(true)} type='button' className='hidden md:block text-3xl hover:text-primary'>
          <RxHeart />
        </button>
        <button onClick={() => setActiveCart(true)} type='button' className='text-3xl hover:text-primary'>
          <AiOutlineShoppingCart />
        </button>
      </div>
      <button type='button' onClick={() => setActiveMenu(true)} className='md:hidden'>
      <RxHamburgerMenu className='text-3xl'/>
      </button>
      { activeMenu && <Menu /> }
      { activeCart && <Cart /> }
      { activeProfile && <Profile /> }
      { activeFavList && <FavList /> }
    </>
  )
}

export default NavbarButtons