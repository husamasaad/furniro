import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Header = ({ pageName }) => {
  return (
    <header className="relative min-h-[314px] z-10 flex-center">
      <Image alt={pageName} src='/banner.png' fill className="w-full h-full object-cover absolute inset-0 -z-10" priority />
      <div className='text-center'>
        <h1 className='heading2 text-black font-normal capitalize'>{pageName}</h1>
        <div className='text-[#9F9F9F] text-[16px] flex gap-6 items-center flex-wrap mt-3'>
          <Link className='hover:underline' href='/'>Home</Link>
          <FaChevronRight />
          <Link className='hover:underline capitalize' href={`/${pageName}`}>{pageName}</Link>
        </div>
      </div>
    </header>
  )
}

export default Header