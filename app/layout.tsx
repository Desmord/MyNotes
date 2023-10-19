import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './reset.css'
import './globals.css'

import ToasterProvider from './Components/ToasterProvider/ToasterProvider'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyNotes',
  description: 'MyNotes app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  )
}
