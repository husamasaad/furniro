
import { getLiked, getProduct } from "@/sanity/actions"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
import LikeItem from "./LikeItem"


const LikesList =  ({ userId }) => {

  const [likes, setLikes] = useState([])


  useEffect(() => {
    const fetchLikes = async () => {
      const fetchedLikes = await getLiked(userId)
      setLikes(fetchedLikes?.products)
    }
  
    fetchLikes()
  }, [])

  if (!likes) {
    return (
      <p className='text-center body-semibold text-color-gray-3'>You haven't saved anything yet, your likes will be saved here...</p>
    )
  }
  
  return (
    <>
      {likes?.map(item => <LikeItem productId={item._ref} key={item._id} />)}
    </>
  )
}

export default LikesList