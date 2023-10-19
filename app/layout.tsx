import './reset.scss'
import './globals.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import ToasterProvider from './Components/ToasterProvider/ToasterProvider'
import AppContainer from './Components/AppContainer/AppContainer'

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
      <body className={`${inter.className}`}>
        <ToasterProvider />
        <AppContainer>
          {children}
        </AppContainer>
      </body>
    </html>
  )
}
