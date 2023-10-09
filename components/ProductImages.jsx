'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ProductImages = ({ images }) => {

  const [currentImage, setCurrentImage] = useState(images[0])

  const handleClick = (img) => {
    setCurrentImage(img)
  }

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4'>

      <div className='flex md:flex-col gap-6'>
        {images.map(img => (
          <Image 
            onClick={() => handleClick(img)} 
            key={img.id} src={img} width={78} 
            height={80} alt='asgard' 
            priority 
            className={`cursor-pointer w-[70px] h-[70px] object-cover rounded-lg drop-shadow-lg border
              ${currentImage == img ? 'border-primary border-2': ''}
            `}/>
        ))}
      </div>

      <Image priority src={currentImage} width={423} height={500} alt='asgard' className='cursor-pointer w-[423px] h-[500px] object-cover rounded-lg drop-shadow-lg border'/>
    </div>
  )
}

export default ProductImages