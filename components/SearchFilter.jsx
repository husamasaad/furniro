'use client'

import { useStateContext } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross1, RxMagnifyingGlass } from 'react-icons/rx'


const SearchFilter = ({ keywords, searchParams }) => {

  const { setCurrentPage } = useStateContext()
  const Router = useRouter()

  const isTagsExist = {
    showClear : searchParams.tags ? true : false,
    placeText : searchParams.tags ? `showing results for: ${searchParams.tags}` : 'type a key word to search :',
  }

  const [searchValue, setSearchValue] = useState('')

  const [placeHolder, setPlaceHolder] = useState(isTagsExist.placeText)
  const [showClear, setShowClear] = useState(isTagsExist.showClear)



  const searchKeywords = new Set()
  
  keywords.forEach(key => {
    key.tags.forEach(tag => {
      searchKeywords.add(tag.toLowerCase())
    })
  });
  
  const [keywordList, setKeywordList] = useState([])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    setKeywordList(Array.from(searchKeywords).filter(key => key.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const updateParams = (key) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('tags', key)
    searchParams.delete('page')
    setCurrentPage(1)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    Router.push(newPathname)
    setPlaceHolder(`showing results for: ${key}`)
    setSearchValue('')
    setShowClear(true)
  }

  const handleClear = () => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.delete('page')
    searchParams.delete('tags')
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    Router.push(newPathname)
    setSearchValue('')
    setPlaceHolder('type a key word to search :')
    setShowClear(false)
  }
  
  return (
    <div className='flex gap-4 items-center relative flex-wrap'>
      <p className='text-[20px] leading-[26px] text-[#9F9F9F] flex items-center gap-4 pl-6'>
        Search :
      </p>
      <label htmlFor="searchFilter" className=" mx-auto">
        <input 
          type="text"
          name="searchFilter"
          className='px-6 py-3 no-focus w-[80vw] sm:w-96 rounded-lg'
          placeholder={placeHolder}
          value={searchValue}
          onChange={handleChange}
        />
      </label>
      {
        searchValue.length > 0 &&
        <>
          <div className="absolute left-0 top-10 py-6 border-t bg-white w-full z-10 overflow-y-scroll max-h-screen">
            {keywordList.length > 0 ?
            (keywordList.map(key => (
              <button
              onClick={() => updateParams(key)}
              type="button" className="w-full text-left text-[16px] text-[#9F9F9F] py-2 px-6 hover:bg-primary hover:text-white no-focus focus:bg-primary focus:text-white">{key}</button>
              ))) :
              (<p className="w-full text-left text-[16px] text-[#9F9F9F] py-2 px-6">No Results Found</p>)
            }
          </div>
        </>
      }
      { showClear &&
        <button type="button" onClick={handleClear} className="absolute right-3 top-1/2 -translate-y-1/2">
          <RxCross1 />
        </button>         
      }
    </div>
  )
}

export default SearchFilter