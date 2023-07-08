import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Montserrat} from 'next/font/google'

 
const Mont = Montserrat({
  weight: ['200', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Homepage',
  description: 'A replica for a figma design',
}

export default function RootLayout({ children }) {
  return (
    <html className='dark' lang="en">
      <body className={`bg-[#f9f9f9] dark:bg-slate-900 dark:text-white ${Mont.className}`} >
      {children} 
        </body>
        
    </html>
  )
}
