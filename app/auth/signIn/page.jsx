import { Login, LoginHeader } from '@/components'
import { Link } from 'nextjs13-progress'
import React from 'react'

const SignIn = () => {
  return (
    <main className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F9F1E7] relative'>
      <Link href="/" className='absolute top-5 left-5 text-color-gray-3 hover:text-black'>🏠 Go Back Home</Link>
      <div className="max-w-md w-full space-y-8">
        <LoginHeader 
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/auth/signUp" 
        />
        <Login />
    </div>
    </main>
  )
}

export default SignIn