'use client'

import { useStateContext } from '@/context/ContextProvider'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxHeart } from 'react-icons/rx'
import LikeBtn from './LikeBtn'
import toast from 'react-hot-toast'

const ProductCta = ({ product }) => {

  const { cartList, setCartList, setActiveCart } = useStateContext()
  
  const [amount, setAmount] = useState(1)

  const  handleAddToCart = () => {

    const isIdPresent = cartList.reduce((accumulator, currentValue) => {
      if (currentValue.id === product._id) {
        return true;
      }
      return accumulator;
    }, false);

    if (isIdPresent) {
      setCartList(prevList => {
        return prevList.map(item => {
          if (item.id === product._id) {
            let count = item.amount
            
            return {
              ...item,
              amount: count + amount
            }
          } 
          return item
        })
      })
    } else {
      setCartList(prevList => (
        [...prevList, {
          id: product._id,
          amount: amount,
          title: product.title,
          price: product.price,
          image: product.images[0]
        }]
      ))
    }
    setActiveCart(true)
    toast.success('added to cart')
  } 

  const handleAdd = () => {
    setAmount(prev => prev + 1)
  }
  const handleMinus = () => {
    setAmount(prev => {
      if (prev == 1) {
        return 1
      } else {
        return prev - 1
      }
    })
  }

  return (
    <div className='flex-between flex-wrap gap-4 mt-12'>
      <div className='border border-black w-full sm:w-fit h-16 uppercase font-bold flex-between rounded-2xl text-color-gray-1 overflow-hidden'>
        <button type='button' onClick={handleMinus} className='p-6 hover:bg-primary hover:text-white transition-all'>-</button>
        <span className='p-6'>{amount}</span>
        <button type='button' onClick={handleAdd} className='p-6 hover:bg-primary hover:text-white transition-all'>+</button>
      </div>
      <button
        onClick={handleAddToCart}
        className='border border-black w-full sm:w-max min-w-[150px] h-16 uppercase font-bold flex-center cursor-pointer transition-all rounded-2xl text-color-gray-1 gap-2 hover:bg-primary hover:text-white'
      >
      <AiOutlineShoppingCart /> <span>add to cart</span> 
      </button>
      <LikeBtn productId={product._id} btnStyles="border border-black w-full sm:w-max min-w-[150px] h-16 uppercase font-bold flex-center cursor-pointer transition-all rounded-2xl text-color-gray-1 gap-2 hover:bg-primary hover:text-white" />
    </div>
  )
}

export default ProductCta