
import { Footer, Header, NavbarComponent } from '@/components'


export default function RootLayout({ children }) {
  return (
      <>
        <NavbarComponent />
        {children}
        <Footer />
      </>
  )
}
