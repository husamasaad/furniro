import './globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { NavbarComponent } from '@/components'
import { ContextProvider } from '@/context/ContextProvider'
import { Next13NProgress } from 'nextjs13-progress'

export const metadata = {
  title: 'Furniro',
  description: 'Created by Husam Asaad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ContextProvider>
        <NavbarComponent />
        {children}
        <Next13NProgress color="#7676B2" height={5} />
      </ContextProvider>
      </body>
    </html>
  )
}
