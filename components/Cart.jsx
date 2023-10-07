'use client'

import { useStateContext } from '@/context/ContextProvider'
import Image from 'next/image'
import React from 'react'

const Cart = () => {


  const { setActiveCart } = useStateContext()

  return (
    <>
      <div className='absolute bg-black/70  min-h-screen w-screen top-0 right-0 z-50 transition-all' />
      <div className='absolute w-[417px] pt-10 max-w-full bg-white text-slate-100 right-0 top-0 z-50 transition-all max-h-screen overflow-y-scroll'>
        <div className='flex-between px-10'>
          <h2 className='base-bold text-black'>Shopping Cart</h2>
          <button className='text-5xl' onClick={() => setActiveCart(false)}>
            <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
          </button>
        </div>
        <div className='border-t mt-10 p-10 flex-between flex-col min-h-[70vh]'>
          <div className='flex-1'>
            <p className='text-center body-semibold text-color-gray-3'>No Items Added</p>
          </div>
          <div className='flex-between w-full'>
            <p className='body-semibold text-color-gray-3'>Subtotal:</p>
            <p className='text-primary body-semibold'>Rs. 520,000.00</p>
          </div>
          <div className='border-t mt-5 pt-5 w-full flex-between'>
            <button className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
              clear
            </button>
            <button className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
              Checkout
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart