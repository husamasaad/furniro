import { useStateContext } from "@/context/ContextProvider"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Next13NProgress } from "nextjs13-progress"
import toast from "react-hot-toast"


const CheckOutBtn = () => {

  const router = useRouter()
  
  const { setActiveCart, cartList, setCartList } = useStateContext()


  const handleCheckOut = () => {
    if (cartList.length === 0) {
      toast.error("You didn't add Items Yet")
    } else {
      setActiveCart(false)
      router.push('/checkout')
    }
  }



  return (
    <button 
      type="button" 
      onClick={handleCheckOut} 
      className='border border-black py-2 px-6 rounded-full text-color-gray-1'
    >
      Checkout
    </button>
  )
}

export default CheckOutBtn