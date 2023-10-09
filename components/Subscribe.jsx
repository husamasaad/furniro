'use client'

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Subscribe = () => {

  const [emailValue, setEmailValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValue) {
      toast.success('Subscribed Succesfully')
      setEmailValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="border-b border-color-gray-1 outline-none p-3 md:min-w-[280px] text-color-gray-1" 
        placeholder='Enter Your Email Address' 
        type="email" 
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        onSubmit={handleSubmit}
        />
        <button className='md:ml-3 border-b border-color-gray-1 p-3 text-color-gray-1 font-semibold' type='submit'>
          Subscribe
        </button>

      <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
    </form>
  )
}

export default Subscribe