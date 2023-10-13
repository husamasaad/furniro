'use client'

import { getProduct, removeLikedProduct } from '@/sanity/actions'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const LikeItem = ({ productId, handleRemove }) => {


  const [product, setProduct] = useState()


  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(productId)
      setProduct(product)
    }
  
    fetchProduct()
  }, [])



  return (
    <div className="flex-between w-full px-8">
        <div className="flex gap-6 items-center">
          <Image 
            src={product?.images[0]}
            alt={product?.title}
            width={105}
            height={105}
            priority
            className="rounded-lg drop-shadow-lg border h-[80px] w-[80px] sm:w-[105px] sm:h-[105px] object-cover"
          />
          <div>
            <h4 className="text-sm font-semibold text-black">{product?.title}</h4>
            <div className="text-sm text-black flex gap-4 items-center mt-4">
              <span className="text-primary">${product?.price}</span>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => handleRemove(product._id)}>
          <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
        </button>
      </div>
  )
}

export default LikeItem