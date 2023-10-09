import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'
import { RxHeart } from 'react-icons/rx'

const ProductCard = ({ product }) => {

  return (
    <div className='transition-all drop-shadow-xl group relative overflow-hidden rounded-md max-w-[285px]'>
      {product.discount > 0 && (
        <span className='absolute top-5 right-5 rounded-full w-12 h-12 text-md flex-center bg-[#E97171] text-white'>-%50</span>
      )}
      {product.new && (
        <span className='absolute top-5 right-5 rounded-full w-12 h-12 text-md flex-center bg-[#2EC1AC] text-white'>New</span>
      )}
      <Image src={product.images[0]} width={285} height={300} className='w-full h-[300px] object-cover' alt={product.title} />
      <div className='p-8 bg-light-bg text-left'>
        <h4 className='heading4 text-color-gray-1'>{product.title.split('|')[1]}</h4>
        <p className='small-regular text-color-gray-3 my-3 truncate'>{product.subtitle}</p>
        <p className='w-full flex-between'>Rp {product.price} {product.discount > 0 ? (
          <span className='small-regular text-color-gray-5 line-through'>Rp {product.price / product.discount}</span>
        ) : ''}</p>
      </div>
      <div className='hidden transition-all absolute inset-0 w-full h-full group-hover:flex-center group-focus:flex-center flex-col bg-black/30 gap-4 no-focus'>
        <Link href={`/shop/${product.slug.current}`} className='btn-fill-white hover:btn-fill h-fit transition-all'>
          View Product
        </Link>
        <button className='custom-btn text-white gap-2 hover:underline transition-all'>
          <RxHeart /> Like
        </button>
      </div>
    </div>
  )
}

export default ProductCard