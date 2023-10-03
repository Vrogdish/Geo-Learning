import Header from '@/containers/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/containers/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Geo - Learning',
  description: 'Jeux sur les drapeaux et capitales des pays',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gradient-dark text-orange-50`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
