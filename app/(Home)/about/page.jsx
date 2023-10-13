import { Feetures, Header } from '@/components'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <main className="overflow-hidden">
      <Header pageName="about" />
      
      <section className="paddings max-w-[1024px] mx-auto">
      <Image src="/logo.png" alt="logo" width={158} height={40} className='object-contain h-6 sm:h-9 w-fit mx-auto mb-16' />
      <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto leading-8'>Welcome to Furniro, your ultimate destination for exquisite furniture pieces that elevate your space and bring your vision to life. We are passionate about helping you create a home that reflects your unique style and personality.</p>

      <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto mt-12 leading-8'>At Furniro, we understand the importance of furniture in transforming a house into a home. Our carefully curated collection showcases a diverse range of furniture pieces, designed to meet the needs and preferences of our discerning customers. From classic to contemporary, minimalist to opulent, we offer an extensive selection of high-quality furniture that caters to various tastes and aesthetics.</p>

      <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto mt-12 leading-8'>Craftsmanship and quality are at the heart of what we do. We collaborate with skilled artisans and renowned furniture manufacturers who share our commitment to excellence. Each piece in our collection is crafted with precision and attention to detail, using the finest materials and techniques. Whether it's a solid wood dining table, a plush sofa, or an elegant bedroom set, you can trust that every item you choose from Furniro is built to last.</p>

      <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto mt-12 leading-8'>We believe that furniture shopping should be an enjoyable and hassle-free experience. That's why we have created an intuitive and user-friendly online platform that allows you to explore our extensive catalog from the comfort of your own home. Our website provides detailed product descriptions, high-resolution images, and customer reviews to help you make informed decisions. If you have any questions or need personalized assistance, our friendly and knowledgeable customer service team is always ready to assist you.</p>

      <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto mt-12 leading-8'>We take pride in providing exceptional customer service and ensuring your satisfaction. From the moment you browse our collection to the delivery and installation of your chosen pieces, we strive to exceed your expectations. We offer flexible shipping options, secure payment methods, and hassle-free returns to ensure that your shopping experience with Furniro is seamless.</p>

      <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto mt-12 leading-8'>At Furniro, we are not just in the business of selling furniture; we are passionate about helping you create a space that inspires and nurtures. Whether you are furnishing your dream home, redecorating a room, or searching for a unique statement piece, we are here to guide you every step of the way.</p>

      <p className='text-[#9F9F9F] text-lg max-w-[650px] mx-auto mt-12 leading-8'>Thank you for choosing Furniro. We look forward to being a part of your journey in transforming your living spaces into works of art.</p>
      </section>
      <section className='paddings bg-[#F9F1E7]'>
        <Feetures />
      </section>
    </main>
  )
}
