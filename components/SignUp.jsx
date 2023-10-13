'use client'

import { signupFields } from '@/constants';
import React, { useState } from 'react'
import LoginInput from './LoginInput';
import { createUser } from '@/sanity/actions';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress'

const fields = signupFields;
let fieldsState={};

fields.forEach(field=>fieldsState[field.id]='');

const SignUp =  () => {
  
  const router = useRouter()

  const [signupState, setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const Newuser = createUser(signupState)

    toast.promise(Newuser, {
      loading: 'fetching users',
      success: 'Got the data',
      error: 'Error when fetching',
    }
    );
    NProgress.start()
    
    const result = await Newuser


    if (result == 'email') {
      setSignupState({...signupState, email: ""})
      NProgress.done()
      toast.error('This Email already exist!')
    } else if (result == 'email') {
      setSignupState({...signupState, username: ""})
      NProgress.done()
      toast.error('This username already exist!')
    } else {
      toast.success('signed up successfully')
      NProgress.done()
      router.replace('/auth/signIn')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="">
          {
            fields.map(field=>
              <LoginInput
                key={field.id}
                labelText={field.labelText}
                labelFor={field.labelFor}
                handleChange={handleChange}
                value={signupState[field.id]}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            )
          }
        </div>
        
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-10"
          onSubmit={handleSubmit}
        >
          Sign Up
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

export default SignUp