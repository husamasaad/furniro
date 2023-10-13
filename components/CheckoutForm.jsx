'use client'

import React, { useState } from 'react'
import CheckoutInput from './CheckoutInput'
import { checkoutFormData } from '@/constants'


const fields = checkoutFormData;
let fieldsState={};

fields.forEach(field=>fieldsState[field.id]='');
fieldsState.firstName = ''
fieldsState.lastName = ''


const CheckoutForm = ({ detailData, handleChange }) => {

  return (
    <div className='flex-1'>
      <h2 className='text-md md:text-2xl font-semibold'>Details :</h2>
      <form onSubmit={(e) => e.preventDefault()} className='w-full'>
        <div className='flex gap-4 items-center'>
          <CheckoutInput  
            labelText="first name"
            value={detailData.firstName} 
            handleChange={handleChange} 
            id="firstName" 
            placeholder=""
          />
          <CheckoutInput  
            labelText="last name"
            value={detailData.lastName} 
            handleChange={handleChange} 
            id="lastName" 
            placeholder=""
          />
        </div>
        {checkoutFormData.map(input => (
          <CheckoutInput  
            labelText={input.labelText}
            value={detailData[input.id]} 
            handleChange={handleChange} 
            id={input.id}
            placeholder=""
          />
        ))}
        
      </form>
    </div>
  )
}

export default CheckoutForm