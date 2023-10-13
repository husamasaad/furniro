import { Feetures, GallaryPaginatinos, Header, ImagesGrid } from '@/components'
import { getGallery, getGalleryCount } from '@/sanity/actions'
import Image from 'next/image'
import React from 'react'

export default async function page({ searchParams }) {

  const page = searchParams?.page || 1

  const images = await getGallery(page, 13)

  const imagesCount = await getGalleryCount()

  const pages = Array.from({ length: Math.ceil(imagesCount / 12) }, (_, index) => index + 1);

  return (
    <main className="overflow-hidden">
      <Header pageName="gallery"/>
      <section className="paddings mx-auto">
          <h2 className='heading2 text-black capitalize text-center'>Design Inspiration Gallery</h2>
          <p className='text-[16px] text-[#9F9F9F] leading-8 text-center max-w-[550px] mx-auto mt-6 mb-20'>Discover beautiful and inspiring room designs to spark your creativity and find the perfect furniture for your home.</p>
          <ImagesGrid images={images} />
          <GallaryPaginatinos pagesCount={pages} />
      </section>
      <section className='paddings bg-[#F9F1E7]'>
        <Feetures />
      </section>
    </main>
  )
}
