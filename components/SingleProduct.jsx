import Image from 'next/image'
import React from 'react'
import ProductCta from './ProductCta'
import ProductImages from './ProductImages'
import { Link } from 'nextjs13-progress'


const SingleProduct = ({ product }) => {

  return (
    <section className="x-paddings py-8">
      <div className="flex items-center gap-8 gap-y-16 md:gap-20 flex-wrap">
        <ProductImages images={product.images} />
        <div className='flex justify-between flex-col'>
          <div>
            <h1 className=' leading-[48px] text-4xl md:text-5xl'>{product.title}</h1>
            <p className='text-[20px] leading-[26px] text-[#9F9F9F] my-[15px]'>${product.price}</p>
            <p className='max-w-xl text-[13px] leading-[26px] tracking-wider'>
              {product.summary}
            </p>
            <div className='flex gap-4 fllex-wrap my-12'>
              <p className='text-[20px] leading-[26px] text-[#9F9F9F]'>Category :</p>
              <p className='text-[20px] leading-[26px] text-color-gray-1'>{product.category}</p>
            </div>
            <div className='flex gap-4 fllex-wrap items-center my-12'>
              <p className='text-[20px] leading-[26px] text-[#9F9F9F]'>Tags :</p>
              <span className='flex gap-4 flex-wrap items-center'>
                {product.tags.map((tag) => <Link href='#' key={tag} className=' py-1/2 px-3 rounded-full drop-shadow-lg border hover:bg-primary hover:text-white mt-1'>{tag}</Link>)}</span>
            </div>
          </div>
          <ProductCta />
        </div>
      </div>
    </section>
  )
}

export default SingleProduct