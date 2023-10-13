'use client'
import { addLiked } from "@/sanity/actions"
import { useSession } from "next-auth/react"
import toast from "react-hot-toast"
import { RxHeart } from "react-icons/rx"


const LikeBtn =  ({ btnStyles, productId }) => {

  const { data: session } = useSession()

  const handleLike = async () => {
    if (session) {
      const result = await addLiked(session.user.id, productId)

      if (result) {
        toast.success('added to wishlist')
      } else {
        toast.error('try again later!')
      }
    } else {
      toast.error('you must login first to save products')
    }
  }

  return (
    <button onClick={handleLike} type='button' className={btnStyles}>
      <RxHeart /> Like
    </button>
  )
}

export default LikeBtn