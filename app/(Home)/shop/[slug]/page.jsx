import { RelatedProduct, SingleProduct } from '@/components'
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

  const related = products.filter(item => item.category === product.category).slice(0, 4)

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
      <section className='paddings border-y'>
        <h2 className='text-center text-[20px] leading-[26px] text-color-gray-1 font-semibold mb-10'>Descritpion</h2>
        <p className='max-w-[1024px] mx-auto text-[16px] leading-[26px] text-[#9F9F9F]'>{product.description}</p>
      </section>
      <RelatedProduct related={related} />
    </main>
  )
}

export default page