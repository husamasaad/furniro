import './globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Footer, NavbarComponent } from '@/components'
import { ContextProvider } from '@/context/ContextProvider'
import { Next13NProgress } from 'nextjs13-progress'

export const metadata = {
  title: 'Furniro',
  description: 'Created by Husam Asaad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
      <body>
        {children}
        <Next13NProgress color="#B88E2F" height={5} />
      </body>
      </ContextProvider>
    </html>
  )
}
