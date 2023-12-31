import { Link } from 'nextjs13-progress'
import React from 'react'
import GallaryCarousel from './GallaryCarousel'
import { getGallery } from '@/sanity/actions'

const Gallary = async () => {

  const images = await getGallery(1, 5)

  return (
    <section className='paddings bg-[#FCF8F3] relative'>
      <div className="flex gap-6 items-center flex-col md:flex-row">
        <div className='flex-1 md:min-w-[400px]'>
        <div className="flex gap-4 md:gap-2 flex-col">
            <span className="body-text text-font-clr uppercase tracking-[2px] pl-1"></span>
            <h2 className="heading1 text-color-gray-1">50+ Beautiful rooms 
            inspiration</h2>
            <p className="paragraph-regular text-font-clr max-w-2xl">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          </div>
          <Link href="/gallery" className="btn-fill w-full sm:w-fit mt-10 hover:btn-outline">Explore More</Link>
        </div>
        <GallaryCarousel images={images} />
      </div>
    </section>
  )
}

export default Gallary