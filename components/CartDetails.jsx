'use client'
import { useStateContext } from '@/context/ContextProvider'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BsX, BsDot, BsCircleFill, BsCircle } from 'react-icons/bs'

const payMethods = [
  {
    name: 'direct',
    title: 'Direct Bank Transfer',
    description: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'
  },
  {
    name: 'cash',
    title: 'Cash On Delivery',
    description: 'Make your payment when your product is recived, our team will contact you to confirm your order and location. Please make sure your contact information are correct and valid.'
  },

]

const CartDetails = ({ cartList, method, setMethod, total, handleDone }) => {

  return (
    <div className='flex-1 w-full md:pt-16'>
      <div className='flex flex-col gap-8 w-full'>
        <div className='flex-between w-full'>
          <p className='text-md md:text-2xl font-semibold'>Product</p>
          <p className='text-md md:text-2xl font-semibold'>subtotal</p>
        </div>
        {cartList.map(item => (
          <div className='flex-between w-full'>
            <div className='text-md md:text-2xl flex gap-2 items-center'><span className='text-color-gray-3'>{item.title}
              </span> <BsX />
              <span>{item.amount}</span>
            </div>
            <p className='text-md md:text-2xl text-color-gray-3'>${item.price}</p>
          </div>
        ))}
        <div className='flex-between w-full py-6 border-y'>
          <p className='text-md md:text-2xl font-semibold'>Total</p>
          <p className='text-lg md:text-3xl font-semibold text-primary'>${totalPrice}</p>
        </div>
        {method && <>
          <div className='flex gap-12 items-center'>
            <BsCircleFill />
            <span className='text-md md:text-2xl'>{method.title}</span>
          </div>
          <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto'>{method.description}</p>
        </>
        }
        {
          payMethods.map(item => {
            if (item === method) {
              return
            }
            return (
            <button type='button' onClick={() => setMethod(item)} className='flex gap-12 text-[#9F9F9F]  items-center'>
              <BsCircle />
              <span className='text-md md:text-2xl '>{item.title}</span>
            </button>
          )})
        }
        <button
          type='button'
          className='border border-black w-full max-w-[300px] mt-12 mx-auto h-16 uppercase font-bold flex-center cursor-pointer transition-all rounded-2xl text-color-gray-1 gap-2 hover:bg-primary hover:text-white'       
          onClick={handleDone}
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default CartDetails