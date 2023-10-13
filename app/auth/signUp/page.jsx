import { LoginHeader, SignUp } from '@/components'
import { Link } from 'nextjs13-progress'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F9F1E7] relative'>
      <Link href="/" className='absolute top-5 left-5 text-color-gray-3 hover:text-black'>🏠 Go Back Home</Link>
    <div className="max-w-lg w-full space-y-8">
      <LoginHeader 
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/auth/signIn" 
      />
      <SignUp />
    </div>
  </main>
  )
}

export default SignUpPage