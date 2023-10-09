import { SingleProduct } from '@/components'
import { ourProducts } from '@/constants'
import { getProduct, getProducts, getProductsCount } from '@/sanity/actions'
import { Link } from 'nextjs13-progress'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'


export const revalidate = 90

export async function generateStaticParams() {
  
  const count = await getProductsCount()

  const products = await getProducts(0, count)

  return products.map((product) => ({
    slug: product.id,
    count: 0
  }))
}

const page = async ({ params: { slug } }) => {

  const count = await getProductsCount()
  const products = await getProducts(0, count)

  const product = products.find(product => product.slug.current === slug)


  return (
    <main className="overflow-hidden">
      <header className='x-paddings py-10 bg-[#F9F1E7]'>
        <div className='text-[#9F9F9F] text-[16px] flex gap-6 items-center flex-wrap'>
          <Link className='hover:underline' href='/'>Home</Link>
          <FaChevronRight />
          <Link className='hover:underline' href='/shop'>Shop</Link>
          <FaChevronRight /> 
          <Link className='hover:underline' href='/shop'>
            {product.category} 
          </Link>
          <FaChevronRight />
          <span className='text-black'>
            {product.title}
          </span>
        </div>
      </header>
      <SingleProduct product={product} />
    </main>
  )
}

export default page