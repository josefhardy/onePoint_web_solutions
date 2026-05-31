import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-pacifico'
});

export const metadata: Metadata = {
  title: 'onePoint Web Solutions — Professional Websites for UK Small Businesses',
  description: 'We build clean, modern websites for UK small businesses. Mobile responsive, built to rank on Google, with a free first-draft homepage and no contract required.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pacifico.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}