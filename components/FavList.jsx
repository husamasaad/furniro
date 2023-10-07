'use client'

import { useStateContext } from '@/context/ContextProvider'
import Image from 'next/image'
import React from 'react'

const FavList = () => {

  const { setActiveFavList } = useStateContext()

  return (
    <>
      <div className='absolute bg-black/70  min-h-screen w-screen top-0 right-0 z-50 transition-all' />
      <div className='absolute w-96 pt-10 max-w-full bg-white text-slate-100 right-0 top-0 z-50 transition-all max-h-screen overflow-y-scroll'>
        <button className='text-5xl block absolute right-5 top-5' onClick={() => setActiveFavList(false)}>
          <Image src="/delete-icon.svg" alt="close" width={28} height={28} />
        </button>

      </div>
    </>
  )
}

export default FavList