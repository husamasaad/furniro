import { featuresList } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Feetures = () => {
  return (
    <div className='flex-between flex-wrap gap-y-12'>
      {featuresList.map(feature => (
        <div key={feature.id} className='flex items-center gap-4'>
          <Image src={feature.imageUrl} alt={feature.title} width={60} height={60} />
          <div>
            <h4 className='heading4 text-color-gray-1'>{feature.title}</h4>
            <p className='small-regular text-color-gray-3 mt-2'>{feature.details}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feetures