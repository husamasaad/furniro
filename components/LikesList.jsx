'use client'

import { getLiked, getProduct, removeLikedProduct } from "@/sanity/actions"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
import LikeItem from "./LikeItem"

export const revalidate = 10


const LikesList =  ({ userId }) => {

  const [likes, setLikes] = useState([])


  useEffect(() => {
    const fetchLikes = async () => {
      const fetchedLikes = await getLiked(userId)
      setLikes(fetchedLikes?.products)
    }
  
    fetchLikes()
  }, [])

  const handleRemove = async (productId) => {
    const result = await removeLikedProduct(productId, userId)

    if (result) {
      setLikes(prevLikes => {
        const updatedLikes = [...prevLikes];
        const index = updatedLikes.findIndex((obj) => obj._ref === productId);
    
        if (index !== -1) {
          updatedLikes.splice(index, 1);
        }
    
        return updatedLikes;
      });
    }
  }

  if (!likes) {
    return (
      <p className='text-center body-semibold text-color-gray-3'>You haven't saved anything yet, your likes will be saved here...</p>
    )
  }
  
  return (
    <>
      {likes?.map(item => <LikeItem userId={userId} productId={item._ref} key={item._ref} handleRemove={handleRemove} />)}
    </>
  )
}

export default LikesList