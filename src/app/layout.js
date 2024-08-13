import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bahadır Hoca',
  description: 'Lorem Ipsum',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
