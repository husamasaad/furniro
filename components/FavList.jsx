'use client'

import { useStateContext } from '@/context/ContextProvider'
import Image from 'next/image'
import React from 'react'

const FavList = () => {

  const { setActiveFavList } = useStateContext()

  return (
    <>
      <div className='absolute bg-black/70  min-h-screen w-screen top-0 right-0 z-50 transition-all' />
      <div className='absolute w-[417px] pt-10 max-w-full bg-white text-slate-100 right-0 top-0 z-50 transition-all max-h-screen overflow-y-scroll'>
        <div className='flex-between px-10'>
          <h2 className='base-bold text-black'>Products You Like :</h2>
          <button className='text-5xl' onClick={() => setActiveFavList(false)}>
            <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
          </button>
        </div>
        <div className='border-t mt-10 p-10 flex-between flex-col min-h-[70vh]'>
          <div className='flex-1'>
            <p className='text-center body-semibold text-color-gray-3'>You are not logged in <br /> sign in or create a new acount for free</p>
          </div>
          <div className='border-t mt-5 pt-5 w-full flex-between flex-wrap gap-y-6'>
            <button type='button' onClick={() => signIn()}  className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
              Sign In
            </button>
            <button className='border border-black py-2 px-6 rounded-full text-color-gray-1'>
              Create an Account
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default FavList