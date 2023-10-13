import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'

const LoginHeader = ({
  heading,
  paragraph,
  linkName,
  linkUrl="#"
}) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
          <Image 
              alt="logo"
              width={158} height={40} className='object-contain h-6 sm:h-9 w-fit mx-auto'
              src="/logo.png"
            />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-color-gray-1">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-color-gray-2">
        {paragraph}  {' '}
        <Link href={linkUrl} className="font-medium text-color-gray-3 hover:text-color-gray-1 underline">
          {linkName}
        </Link>
      </p>
    </div>
  )
}

export default LoginHeader