'use client'

import CheckoutForm from './CheckoutForm'
import CartDetails from './CartDetails'
import { checkoutFormData } from '@/constants'
import { useState } from 'react';
import { useStateContext } from '@/context/ContextProvider';
import toast from 'react-hot-toast';


const fields = checkoutFormData;
let fieldsState={};

fields.forEach(field=>fieldsState[field.id]='');
fieldsState.firstName = ''
fieldsState.lastName = ''


const CheckOut = () => {

  const [detailData, setDetailData]= useState(fieldsState);

  const handleChange=(e)=>setDetailData({...detailData,[e.target.id]:e.target.value});

  const { cartList, setCartList } = useStateContext()

  const [method, setMethod] = useState('')

  const totalPrice = cartList.reduce((accumulator, currentItem) => {
    const itemPrice = currentItem.price * currentItem.amount;
    return accumulator + itemPrice;
  }, 0);


  const handleDone = () => {
    const requiredFields = [
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone Number' },
      { key: 'streat', label: 'Street Address' },
      { key: 'town', label: 'Town / City' },
    ];

    const missingFields = requiredFields.filter((field) => !detailData[field.key]);

    if (missingFields.length > 0) {
      toast.error(`Please provide your ${missingFields[0].label}`);
      return;
    }

    if (method == '') {
      toast.error(`Please choose a payment method`);
      return;
    }

    toast.custom(<div className="bg-green-800 text-white rounded p-4 shadow text-center">
    Thank you! We received your information and will contact you soon for confirmation.
  </div>);
  }


  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-16 gap-y-16">
      <CheckoutForm 
        detailData={detailData}
        handleChange={handleChange}
      />
      <CartDetails 
        cartList={cartList}
        method={method}
        setMethod={setMethod}
        totalPrice={totalPrice}
        handleDone={handleDone}
      />
    </div>
  )
}

export default CheckOut