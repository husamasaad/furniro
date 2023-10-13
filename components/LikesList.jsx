'use client'

import { getLiked, getProduct, removeLikedProduct } from "@/sanity/actions"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
import LikeItem from "./LikeItem"

export const revalidate = 10


const LikesList =  ({ userId, likes, handleRemove }) => {

  if (likes?.length == 0) {
    return (
      <p className='text-center body-semibold text-color-gray-3 px-8'>You haven't saved anything yet, your likes will be saved here...</p>
    )
  }
  
  return (
    <>
      {likes?.map(item => <LikeItem userId={userId} productId={item._ref} key={item._ref} handleRemove={handleRemove} />)}
    </>
  )
}

export default LikesList