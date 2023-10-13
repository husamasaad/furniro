'use client'

import { useStateContext } from '@/context/ContextProvider';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { RxChevronDown, RxChevronUp } from 'react-icons/rx';

const Filters = ({ keywords }) => {

  const Router = useRouter()
  const { setCurrentPage } = useStateContext()

  const searchKeywords = new Set()
  
  keywords.forEach(key => {
    searchKeywords.add(key.category.toLowerCase())
  });

  const [showFilters, setShowFilters] = useState(false)

  const [selectedOption, setSelectedOption] = useState('all')

  const handleOptionChange = (key) => {
    setSelectedOption(key);
    setShowFilters(false)
    const searchParams = new URLSearchParams(window.location.search)
    if (key === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', key)
    }
    searchParams.delete('page')
    setCurrentPage(1)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    Router.push(newPathname)
  };


  return (
    <div className='flex gap-4 items-center flex-wrap'>
      <p className='text-[20px] leading-[26px] text-[#9F9F9F] pl-6'>Category :</p>
      <label htmlFor="filters" className='relative mx-auto'>
        <input 
          type="text"
          name='filters'
          readOnly
          value={selectedOption}
          className='appearance-none px-6 py-3 no-focus w-[80vw] sm:w-96 rounded-lg cursor-pointer capitalize'
          onClick={() => setShowFilters(prev => !prev)}
          placeholder='chose a category'
        />
        { showFilters &&
          <div className="absolute left-0 top-8 pt-6 border-t bg-white w-full z-10 max-h-screen">
            <button 
              type='button' 
              onClick={() => handleOptionChange("all")} 
              className={`w-full text-left text-[16px] text-[#9F9F9F] py-2 px-6 hover:bg-primary hover:text-white no-focus focus:bg-primary focus:text-white  ${selectedOption === "all" ? 'bg-primary text-white' : ''}`}>
                all
            </button>
          {Array.from(searchKeywords).map(key => (
            <button 
              type='button' 
              onClick={() => handleOptionChange(key)} 
              className={`w-full text-left text-[16px] text-[#9F9F9F] py-2 px-6 hover:bg-primary hover:text-white no-focus focus:bg-primary focus:text-white  ${selectedOption === key ? 'bg-primary text-white' : ''}`}
              key={key} 
            >
              {key}
            </button>
          ))}
          </div>
        }
        <button type="button" onClick={() => {}} className="absolute right-3 top-1/2 -translate-y-1/2">
          {showFilters ? <RxChevronUp /> : <RxChevronDown />}
        </button>

      </label>
    </div>
  )
}

export default Filters
