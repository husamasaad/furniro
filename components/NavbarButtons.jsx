'use client'

import React from 'react'
import Menu from './Menu'

import { useStateContext } from '@/context/ContextProvider'
import Cart from './Cart'
import FavList from './FavList'
import { RxAvatar, RxMagnifyingGlass, RxHeart, RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'nextjs13-progress'

const NavbarButtons = () => {

  const { activeMenu, activeCart, activeFavList, setActiveMenu, setActiveCart, setActiveFavList } = useStateContext()

  return (
    <>
      <div className='flex-center gap-6 md:gap-12'>
        <button onClick={() => setActiveFavList(true)} type='button' className='hidden md:block text-3xl hover:text-primary'>
          <RxHeart />
        </button>
        <button onClick={() => setActiveCart(true)} type='button' className='text-3xl hover:text-primary'>
          <AiOutlineShoppingCart />
        </button>
        <Link href="/shop#search" type='button' className='hidden md:block text-3xl hover:text-primary'>
          <RxMagnifyingGlass />
        </Link>
      </div>
      <button type='button' onClick={() => setActiveMenu(true)} className='md:hidden'>
      <RxHamburgerMenu className='text-3xl'/>
      </button>
      { activeMenu && <Menu /> }
      { activeCart && <Cart /> }
      { activeFavList && <FavList /> }
    </>
  )
}

export default NavbarButtons