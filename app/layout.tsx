import styles from './layout.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})
export const metadata = {
  title: 'Bartek Kowalski',
  description: 'Founder and Machine Learning Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin: 0}}>{children}</body>
    </html>
  )
}
