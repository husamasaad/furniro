
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
const GallaryPaginatinos = ({ pagesCount }) => {

  const router = useRouter()


  const [ currentPage, setCurrentPage ] = useState(1)

  const handleClick = (current) => {
    setCurrentPage(current)

    router.push(`/gallery?page=${current}`)
  }

  const handleNext = () => {
    setCurrentPage(prev => prev + 1)

    router.push(`/gallery?page=${currentPage + 1}`)
  }

  return (
    <div className='flex-center gap-12 y-paddings'>
      {pagesCount?.map(page => (
        <button
          className={`btn-navigation ${page == currentPage ? '!bg-primary !text-white' : ''}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < pagesCount.length &&
        <button onClick={handleNext} className='btn-navigation' >Next</button>
      }
    </div>
  )
}

export default GallaryPaginatinos