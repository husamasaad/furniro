'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsCamera, BsX, BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const ImageDisplay = ({ images, imageIndex }) => {

  const [index, setIndex] = useState(imageIndex)

  const [showDisplay, setShowDisplay] = useState(false)
  const [displayImage, setDisplayImage] = useState(images[imageIndex].image)


  const handleNext = () => {
    if (index + 1 == images.length) {
      setIndex(0)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
    setDisplayImage(images[index].image)
  }

  const handlePrev = () => {
    if (index == 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(prevIndex => prevIndex - 1)
    }
    setDisplayImage(images[index].image)
  }


  return (
    <>
    <div className="absolute hidden group-hover:flex-center transition-all bg-black/20 top-0 left-0 h-full w-full z-10 group-hover:border-2 border-primary">
      <button
        type='button'
        className='text-5xl text-white group-hover:scale-105 transition-all h-full w-full flex-center'
        onClick={() => setShowDisplay(true)}
      >
        <BsCamera />
      </button>
    </div>
      {showDisplay &&
      <div className='fixed inset-0 h-screen w-full bg-black/80 z-50 overflow-hidden flex-center'>
        <Image 
          width={375}
          height={540}
          src={displayImage}
          alt="image"
          className='w-[70vw] max-h-[80vh] object-contain'
        />
        <button className='text-5xl absolute top-4 right-4 text-white hover:text-primary' onClick={() => setShowDisplay(false)}>
          <BsX />
        </button>
        <button className='text-5xl absolute top-1/2 -translate-y-1/2 right-4 text-white hover:text-primary' onClick={handleNext}>
          <BsChevronRight />
        </button>
        <button className='text-5xl absolute top-1/2 -translate-y-1/2 left-4 text-white hover:text-primary' onClick={handlePrev}>
          <BsChevronLeft />
        </button>
      </div>
      }
      </>
  )
}

export default ImageDisplay