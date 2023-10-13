import React from 'react'

const CheckoutInput = ({ labelText, value, handleChange, id, placeholder }) => {
  return (
    <div className='w-full mt-8'>
      <label className="block text-sm md:text-md mb-6 capitalize" htmlFor={id}>
        {labelText}
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-full py-4 px-6  leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default CheckoutInput