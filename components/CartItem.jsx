import { useStateContext } from "@/context/ContextProvider"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Image from "next/image"

import { RxCross1 } from 'react-icons/rx'

const CartItem = ({ item }) => {

  const { cartList, setCartList, setActiveCart } = useStateContext()


  const handleRemove = () => {
    setCartList(prevList => prevList.filter(product => product.id !== item.id))
    
  }

  return (
    <div className="flex-between w-full px-8">
      <div className="flex gap-6 items-center">
        <Image 
          src={item.image}
          alt={item.title}
          width={105}
          height={105}
          priority
          className="rounded-lg drop-shadow-lg border h-[80px] w-[80px] sm:w-[105px] sm:h-[105px] object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-black">{item.title}</h4>
          <div className="text-sm text-black flex gap-4 items-center mt-4">
            {item.amount }  
            <RxCross1 />
            <span className="text-primary">${item.price}</span>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleRemove}>
        <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
      </button>
    </div>
  )
}

export default CartItem