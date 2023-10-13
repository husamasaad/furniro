import { Feetures, Filters, Header, SearchFilter } from '@/components'
import Products from '@/components/Products'
import ShopNavigations from '@/components/ShopNavigations'
import { getKeywords } from '@/sanity/actions'
import React from 'react'

export const revalidate = 90

const page = async ({ searchParams }) => {

  const rangeStart = ((Number(searchParams.page) * 16) - 16) || 0
  const rangeEnd = (Number(searchParams.page) * 16) || 16
  
  const keywords = await getKeywords()

  return (
    <main className="overflow-hidden">
      <Header pageName="shop" /> 
      <section className='x-paddings py-6 bg-[#F9F1E7]' id="search">
        <div className="flex-between flex-wrap gap-6">
          <SearchFilter keywords={keywords} searchParams={searchParams} />
          <Filters keywords={keywords} />
        </div>
      </section>
      <section className='x-paddings py-6'>
        <Products rangeStart={rangeStart} rangeEnd={rangeEnd} searchParams={searchParams} />
      </section>
      <section className='paddings bg-[#F9F1E7]'>
        <Feetures />
      </section>
    </main>
  )
}

export default page