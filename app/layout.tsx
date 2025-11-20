import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-pacifico'
});

export const metadata: Metadata = {
  title: 'onePoint Web Solutions - Modern Web Development',
  description: 'Professional web development services with free first-draft homepage and optional AI-powered features for businesses of all sizes.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
        <Analytics />
      </body>
    </html>
  )
}
