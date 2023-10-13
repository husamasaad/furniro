import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'nextjs13-progress'
import { AiOutlineShop } from 'react-icons/ai'

const RelatedProduct = ({ related }) => {
  return (
    <section className='paddings'>
      <h2 className='heading3 text-center text-color-gray-1 capitalize'>you may also like</h2>
      <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-16 py-12 mt-10'>
        {
          related.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>
      
      <div className='mt-12'>
        <Link href="/shop" className="btn-outline hover:btn-fill focus:btn-fill no-focus  w-fit mx-auto gap-6">
          <AiOutlineShop className='text-4xl' />
          <span>back to Shop</span>
        </Link>
      </div>
    </section>
  )
}

export default RelatedProduct