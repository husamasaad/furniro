import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxHeart } from 'react-icons/rx'

const ProductCta = () => {
  return (
    <div className='flex-between flex-wrap gap-4 mt-12'>
      <div className='border border-black w-full sm:w-fit h-16 uppercase font-bold flex-between rounded-2xl text-color-gray-1'>
        <button className='p-6'>-</button>
        <span className='p-6'>1</span>
        <button className='p-6'>+</button>
      </div>
      <button className='border border-black w-full sm:w-max min-w-[150px] h-16 uppercase font-bold flex-center cursor-pointer transition-all rounded-2xl text-color-gray-1 gap-2'>
      <AiOutlineShoppingCart /> <span>add to cart</span> 
      </button>
      <button className='border border-black w-full sm:w-max min-w-[150px] h-16 uppercase font-bold flex-center cursor-pointer transition-all rounded-2xl text-color-gray-1 gap-2'><RxHeart /> <span>Like</span></button>
    </div>
  )
}

export default ProductCta