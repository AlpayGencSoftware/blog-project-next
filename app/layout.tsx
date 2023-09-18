import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Navbar from './components/Navbar'
import MyProfilePicture from './components/MyProfilePicture'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Created by Dave Gray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar/>
        <MyProfilePicture/>
        {children}
        </body>
    </html>
  )
}
