'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const GallaryCarousel = ({ images }) => {


  const [imagesList, setImagesList] = useState(images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleSwipe = () => {

    setImagesList((prevList) => {
      let newList = [...prevList.slice(1), prevList[0]]

      return newList
    })
    setCurrentImageIndex(prev => {
      if (prev + 1 == imagesList.length) {
        return 0
      }
      return prev + 1
    })
  }

  const handleDotClick = (index) => {
    setImagesList((prevList) => {
      let copied = prevList.slice(0)
      let spliced = copied.splice(index, 1)[0]
      let newList = [spliced, ...copied]
      
      setCurrentImageIndex(index)
      return newList
    })
  }


  return (
    <div className='flex-[1.5] w-full min-h-[582px] relative'>
      <div className='mx-auto flex-center md:flex-start relative h-[582px] z-10'>
        <Image alt="image" width={404} height={582} src={imagesList[0].srcUrl} className='object-fill h-[582px] drop-shadow-2xl' />
        <div className='absolute left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 bottom-10 p-4 md:p-12 bg-white/70'>
          <span className='text-sm md:small-regular text-color-gray-2 font-semibold'>
            0{currentImageIndex + 1} — {imagesList[0].tag}
          </span>
          <h4 className='heading4 md:heading3 md:text-[28px] text-color-gray-1 sm:mt-3'>{imagesList[0].title}</h4>
          <button className='absolute bottom-0 -right-[48px] p-4 text-white text-2xl bg-primary' onClick={handleSwipe}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className='absolute left-[414px] top-0 h-full hidden lg:grid  items-center'>
        <div className='grid grid-flow-col gap-6 auto-cols-[375px] '>
        {
          imagesList.map((img, index) => {
            if (index == 0) {
              return
            }
            return (
              <Image 
              alt="image" 
              width={375} 
              height={540} 
              src={img.srcUrl} 
              className='object-fill h-[486px]' 
            />)
          })
        }
        </div>
        <div className='flex gap-3 pl-10 z-50'>
          {imagesList.map((img, index) => (
          <button type='button' onClick={() => handleDotClick(index)} className={`${index === currentImageIndex ? 'text-primary border' : ''} p-2 rounded-full border-primary`}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5.5" r="5.5" fill={`${index === currentImageIndex ? '#B88E2F' : '#9F9F9F'}`}/>
            </svg>
          </button>
          ))}
        </div>
      </div>
      <div className='flex-center lg:hidden mt-6 gap-3 z-50'>
          {imagesList.map((img, index) => (
          <button type='button' onClick={() => handleDotClick(index)} className={`${index === currentImageIndex ? 'text-primary border' : ''} p-2 rounded-full border-primary`}>
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



{/* <div className='flex-[1.5] w-full min-h-[582px] grid grid-flow-col-dense gap-6'>
      <button type='button' onClick={handleSwipe} className='absolute right-0 md:right-5 z-10 top-[70%] -translate-y-3/4 md:top-1/2 md:-translate-y-1/2 p-4 rounded-full bg-white text-2xl text-primary font-bold drop-shadow-lg'>
      <FaChevronRight />
      </button>
      <div className='lg:min-w-[484px]'>
        <Image alt="image" width={484} height={582} src={imagesList[0].srcUrl} className='object-cover w-[484px] h-[582px]' />
      </div>
      <div className='hidden md:grid grid-flow-col-dense gap-6 relative'>
        {
          imagesList.map((img, index) => {
            if (index == 0) {
              return
            }
            return (
              <Image 
              alt="image" 
              width={375} 
              height={540} 
              src={imagesList[0].srcUrl} 
              className='object-fill h-[540px]' 
            />)
          })
        }
        <div className='absolute left-0 bottom-10 md:flex hidden gap-6'>
        {imagesList.map((img, index) => (
          <button className={`text-2xl ${index === currentImageIndex ? 'text-primary' : ''}`}>
            <FaDotCircle />
          </button>
        ))}
        </div>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-3 md:hidden flex gap-6'>
        {imagesList.map((img, index) => (
          <button className={`text-2xl ${index === currentImageIndex ? 'text-primary' : ''}`}>
            <FaDotCircle />
          </button>
        ))}
      </div>
      
    </div> */}