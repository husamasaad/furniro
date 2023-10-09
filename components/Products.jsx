import { ourProducts } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { RxHeart } from 'react-icons/rx'
import ProductCard from './ProductCard'
import { getProducts, getProductsCount } from '@/sanity/actions'
import ShopNavigations from './ShopNavigations'

const Products = async ({ rangeStart, rangeEnd }) => {

  const products = await getProducts(rangeStart, rangeEnd)

  const count = await getProductsCount()

  const pages = Array.from({ length: Math.ceil(count / 16) }, (_, index) => index + 1);
  

  return (
    <>
      <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-16 py-12 mt-10'>
        {
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>
      {(rangeEnd - rangeStart) >= 16 &&  <ShopNavigations pagesCount={pages} />}
      
    </>
  )
}

export default Products