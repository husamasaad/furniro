import { Feetures, Filters, Header, SearchFilter } from '@/components'
import Products from '@/components/Products'
import ShopNavigations from '@/components/ShopNavigations'
import React from 'react'

const page = ({ searchParams }) => {

  const rangeStart = ((Number(searchParams.page) * 16) - 16) || 0
  const rangeEnd = (Number(searchParams.page) * 16) || 16
  

  return (
    <main className="overflow-hidden">
      <Header /> 
      <section className='x-paddings py-6 bg-[#F9F1E7]'>
        <div className="flex-between">
          <SearchFilter />
          <Filters />
        </div>
      </section>
      <section className='x-paddings py-6'>
        <Products rangeStart={rangeStart} rangeEnd={rangeEnd} />
      </section>
      <section className='paddings bg-[#F9F1E7]'>
        <Feetures />
      </section>
    </main>
  )
}

export default page