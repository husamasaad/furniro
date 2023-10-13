'use client'

import { useStateContext } from '@/context/ContextProvider'
import Image from 'next/image'
import React from 'react'
import CartItem from './CartItem'
import CheckOutBtn from './CheckOutBtn'

const Cart = () => {

  const { setActiveCart, cartList, setCartList } = useStateContext()

  return (
    <>
      <div className='fixed bg-black/70  min-h-screen w-screen top-0 right-0 z-50 transition-all' />
      <div className='fixed w-[417px] pt-10 max-w-full bg-white text-slate-100 right-0 top-0 z-50 transition-all max-h-screen'>
        <div className='flex-between px-8'>
          <h2 className='base-bold text-black'>Shopping Cart</h2>
          <button className='text-5xl' onClick={() => setActiveCart(false)}>
            <Image src="/cart-close-icon.svg" alt="close" width={28} height={28} />
          </button>
        </div>
        <div className='border-t mt-10 py-10 flex w-full flex-col min-h-[78vh] max-h-[500px]'>
          <div className='flex-1 flex flex-col gap-8 overflow-y-scroll overflow-x-hidden mb-3 w-full'>
            {cartList.length > 0 ? 
            (
              cartList?.map(item => (
                <CartItem key={item.id} item={item} />
              ))
            ) : (
              <p className='text-center body-semibold text-color-gray-3'>No Items Added</p>
            )}
          </div>
          <div className='flex-between w-full px-8'>
            <p className='body-semibold text-color-gray-3'>Subtotal:</p>
            <p className='text-primary body-semibold'>0</p>
          </div>
          <div className='border-t mt-5 pt-5 w-full flex-between px-8'>
            <button type='button' onClick={() => setCartList([])} className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
              clear
            </button>
            <CheckOutBtn />
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart