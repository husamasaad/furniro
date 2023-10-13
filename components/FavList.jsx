'use client'

import { useStateContext } from '@/context/ContextProvider'
import Image from 'next/image'
import { useSession, signIn, signOut, singUp } from "next-auth/react"
import LikesList from './LikesList'
import { Link } from 'nextjs13-progress'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { clearLikes, getLiked, removeLikedProduct } from '@/sanity/actions'
import { useEffect, useState } from 'react'

const FavList = () => {

  const { setActiveFavList } = useStateContext()
  const { data: session, status } = useSession()

  const [likes, setLikes] = useState([])

  useEffect(() => {
    const fetchLikes = async () => {
      const fetchedLikes = await getLiked(session.user.id)
      setLikes(fetchedLikes?.products)
    }
  
    fetchLikes()
  }, [])

  const handleRemove = async (productId) => {
    const result = await removeLikedProduct(productId, session.user.id)

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

  const handleClear = async () => {
    const result = await clearLikes(session.user.id)

    if (result) {
      setLikes([])
    }
    
  }

  return (
    <>
      <div className='fixed bg-black/70  min-h-screen w-screen top-0 right-0 z-50 transition-all' />
      <div className='fixed w-[417px] pt-10 max-w-full bg-white text-slate-100 right-0 top-0 z-50 transition-all max-h-screen'>
        <div className='flex-between px-8'>
          <h2 className='base-bold text-black'>Products You Like :</h2>
          <button className='text-5xl' onClick={() => setActiveFavList(false)}>
            <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
          </button>
        </div>
        <div className='border-t mt-10 py-10 flex w-full flex-col min-h-[78vh] max-h-[500px]'>
          <div className='flex-1 flex flex-col gap-8 overflow-y-scroll overflow-x-hidden mb-3 w-full'>
            {
              status == 'loading' ? (
                <Skeleton className='px-8' count={2} />
              ) :session ? (
                <LikesList userId={session.user.id} likes={likes}
                handleRemove={handleRemove} />
              ): (
                <p className='text-center body-semibold text-color-gray-3'>You are not logged in <br /> sign in or create a new acount for free</p>
              ) 
            }
          </div>
          {status == 'loading' ? (
            <div className='border-t mt-5 pt-5 px-8 w-full flex-between flex-wrap gap-y-4'>
              <Skeleton height={32} width={80} className='rounded-full' />
              <Skeleton height={32} width={102} className='rounded-full' />
            </div>
          ) : (

          <div className='border-t mt-5 pt-5 px-8 w-full flex-between flex-wrap gap-y-4'>
            {session ? (
              <button type='button' onClick={() => signOut()}  className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
                Sign Out
              </button>
            ) : (
              <Link href='/auth/signIn'  className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
                Sign In
              </Link>
            )}
            {session ? (
              <button type='button' onClick={handleClear} className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
                Clear Saved
              </button>
            ) : (
              <Link href='/auth/signUp' className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
                Create an Account
              </Link>
            )}
            
          </div>
          )}

        </div>
      </div>
    </>
  )
}

export default FavList