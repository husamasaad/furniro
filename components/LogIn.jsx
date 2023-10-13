'use client'

import { loginFields } from '@/constants';
import React, { useState } from 'react'
import LoginInput from './LoginInput';
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import NProgress from 'nprogress'

const fields = loginFields;

let fieldsState={};
fields.forEach(field=>fieldsState[field.id]='');

const Login = () => {

  const router = useRouter()

  const [loginState, setLoginState]=useState(fieldsState);

  const handleChange=(e)=>setLoginState({...loginState,[e.target.id]:e.target.value});

  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const res = signIn('credentials', { redirect: false, password: loginState.password, email: loginState.email})
    
    toast.promise(res, {
      loading: 'fetching users',
      success: 'Got the data',
      error: 'Error when fetching',
    })
    NProgress.start()

    const result = await res

    if (result.error === 'CredentialsSignin') {
      toast.error('User does not Exist!')
      NProgress.done()
      setLoginState({ email: '', password: ''})
    } else {
      toast.success('Welcome back')
      NProgress.done()
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                    <LoginInput
                      key={field.id}
                      labelText={field.labelText}
                      labelFor={field.labelFor}
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      isRequired={field.isRequired}
                      placeholder={field.placeholder}
                      handleChange={handleChange}
                      value={loginState[field.id]}
                    />
                
                )
            }
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-10"
          onSubmit={handleSubmit}
        >
          Sign In
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

export default Login