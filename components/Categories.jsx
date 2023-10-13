import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'

const Categories = () => {
  return (
    <section className='paddings'>
      <h2 className='heading3 text-center text-color-gray-1'>Browse Our Shop</h2>
      <p className='paragraph-regular text-font-clr max-w-2xl mt-6 mx-auto text-center'>Where do you plan to place you new Peice of Art? </p>
      <div className='flex-center flex-wrap gap-x-6 gap-y-16 py-12 mt-10'>
        <Link href='/shop?tags=dining' className='drop-shadow-xl group relative cursor-pointer no-focus'>
          <Image src="/dining.png" alt="dining" width={381} height={480} className='object-contain rounded-md transition-all group-hover:opacity-80 group-focus:opacity-80 cursor-pointer group-hover:border group-focus:border border-primary' priority />
          <p className='group-hover:text-primary base-regular text-color-gray-1 text-center mt-6'>Dining</p>
          <button className='hidden group-hover:block group-focus:block group-hover:btn-fill-white group-focus:btn-fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit'>
            View
          </button>
        </Link>
        <Link href='/shop?tags=living' className='drop-shadow-xl group relative cursor-pointer no-focus '>
          <Image src="/living.png" alt="dining" width={381} height={480} className='object-contain rounded-md transition-all group-hover:opacity-80 group-focus:opacity-80 cursor-pointer group-hover:border group-focus:border border-primary' priority />
          <p className='group-hover:text-primary base-regular text-color-gray-1 text-center mt-6'>Living</p>
          <button className='hidden group-hover:block group-focus:block group-hover:btn-fill-white group-focus:btn-fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit'>
            View
          </button>
        </Link>
        <Link href='/shop?tags=bedroom' className='drop-shadow-xl group relative cursor-pointer no-focus'>
          <Image src="/bedroom.png" alt="dining" width={381} height={480} className='object-contain rounded-md transition-all group-hover:opacity-80 group-focus:opacity-80 cursor-pointer group-hover:border group-focus:border border-primary' priority />
          <p className='group-hover:text-primary base-regular text-color-gray-1 text-center mt-6'>Bedroom</p>
          <button className='hidden group-hover:block group-focus:block group-hover:btn-fill-white group-focus:btn-fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit'>
            View
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Categories