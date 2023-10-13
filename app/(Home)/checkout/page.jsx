import { CartDetails, CheckOut, CheckoutForm, Feetures, Header } from '@/components'
import React from 'react'

export default function page() {


  return (
    <main className="overflow-hidden">
      <Header pageName="checkout" />
      <section className="paddings">
        <CheckOut />
      </section>
      <section className='paddings bg-[#F9F1E7]'>
        <Feetures />
      </section>
    </main>
  )
}
