import { ourProducts } from '@/constants'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'
import { RxHeart } from 'react-icons/rx'
import Products from './Products'

const ProductSection = () => {
  return (
    <section className='paddings'>
      <h2 className='heading3 text-center text-color-gray-1'>Our Latest Products</h2>
      <Products rangeStart={0} rangeEnd={8} />
      <div className='mt-6'>
        <Link href="/" className="btn-outline hover:btn-fill focus:btn-fill no-focus  w-fit mx-auto">Show More</Link>
      </div>
    </section>
  )
}

export default ProductSection