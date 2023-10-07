import { ourProducts } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { RxHeart } from 'react-icons/rx'

const ProductSection = () => {
  return (
    <section className='paddings'>
      <h2 className='heading3 text-center text-color-gray-1'>Our Products</h2>
      <div className='flex-center flex-wrap gap-x-6 gap-y-16 py-12 mt-10'>
        {
          ourProducts.map(product => (
            <div key={product.id} className='transition-all drop-shadow-xl group relative overflow-hidden rounded-xl'>
              <Image src={product.image} width={285} height={300} alt={product.title} />
              <div className='p-8 bg-light-bg heading4 text-color-gray-1'>
                <h4>{product.title}</h4>
                <p className='small-regular text-color-gray-3 my-4'>{product.subtitle}</p>
                <p className='w-full flex-between'>Rp {product.price} {product.discount > 0 ? (
                  <span className='small-regular text-color-gray-5 line-through'>Rp {product.price / product.discount}</span>
                ) : ''}</p>
              </div>
              <div className='hidden transition-all absolute inset-0 w-full h-full group-hover:flex-center flex-col bg-black/30 gap-4'>
              <button className='btn-fill-white hover:btn-fill h-fit transition-all'>
                View Product
              </button>
              <button className='custom-btn text-white gap-2 hover:underline transition-all'>
                <RxHeart /> Like
              </button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProductSection