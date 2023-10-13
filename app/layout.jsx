import './globals.css'

import { Footer, NavbarComponent } from '@/components'
import { ContextProvider } from '@/context/ContextProvider'
import { Next13NProgress } from 'nextjs13-progress'
import AuthProvider from '@/context/AuthProvider';

export const metadata = {
  title: 'Furniro',
  description: 'Created by Husam Asaad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <ContextProvider>
      <body>
        {children}
        <Next13NProgress color="#B88E2F" height={5} />
      </body>
      </ContextProvider>
      </AuthProvider>
    </html>
  )
}
