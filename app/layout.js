import { Montserrat } from 'next/font/google'
import './globals.css'
import './checkbox.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata = {
  title: `Rudra's Ellty Assignment`,
  description: 'Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  )
}
