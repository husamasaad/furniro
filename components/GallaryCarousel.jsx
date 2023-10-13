'use client'
import React, { useState } from 'react';
import Image from 'next/image'


const GallaryCarousel = ({ images }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleSwipe = () => {
    setCurrentImageIndex(prev => {
      if (prev + 1 == images.length) {
        return 0
      }
      return prev + 1
    })
  }

  const handleDotClick = (index) => {
    
  }


  return (
    <div className='flex-[1.5] w-full min-h-[582px] relative'>
      <div className='mx-auto flex-center md:flex-start relative h-[582px] z-10'>
        <Image alt="image" width={404} height={582} src={images[currentImageIndex].image} className='object-fill h-[582px] drop-shadow-2xl' />
        <div className='absolute left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 bottom-10 p-4 md:p-12 bg-white/70'>
          <span className='text-sm md:small-regular text-color-gray-2 font-semibold'>
            0{currentImageIndex + 1} — {images[currentImageIndex].tag}
          </span>
          <h4 className='heading4 truncate text-color-gray-1 sm:mt-3 max-w-[200px]'>{images[currentImageIndex].title}</h4>
          <button className='absolute bottom-0 -right-[48px] p-4 text-white text-2xl bg-primary' onClick={handleSwipe}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" strokeWidth="1.5" strokeinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className='absolute left-[414px] top-0 h-full hidden lg:grid  items-center'>
        <div className='grid grid-flow-col gap-6 auto-cols-[375px] '>
        {
          images.map((img, index) => {
            const newIndex = (currentImageIndex + index) % images.length
            if (index == 0) {
              return null
            }
            return (
              <Image 
                alt="image" 
                width={375} 
                height={540} 
                src={images[newIndex].image} 
                className='object-fill h-[486px]'
                priority
                key={`${images[newIndex]}=${newIndex}`}
              />)
          })
        }
        </div>
        <div className='flex gap-3 pl-10 z-50'>
          {images.map((img, index) => (
          <button key={`${img._id}-${index}`} type='button' onClick={() => handleDotClick(index)} className={`${index === currentImageIndex ? 'text-primary border' : ''} p-2 rounded-full border-primary`}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5.5" r="5.5" fill={`${index === currentImageIndex ? '#B88E2F' : '#9F9F9F'}`}/>
            </svg>
          </button>
          ))}
        </div>
      </div>
      <div className='flex-center lg:hidden mt-6 gap-3 z-50'>
          {images.map((img, index) => (
          <button key={`${img._id}-${index}-hidden`} type='button' onClick={() => handleDotClick(index)} className={`${index === currentImageIndex ? 'text-primary border' : ''} p-2 rounded-full border-primary`}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5.5" r="5.5" fill={`${index === currentImageIndex ? '#B88E2F' : '#9F9F9F'}`}/>
            </svg>
          </button>
          ))}
        </div>
    </div>
  )
}

export default GallaryCarousel