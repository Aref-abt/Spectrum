import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700']
});

const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Spectrum | Interior Design Studio',
  description: 'Spectrum is an interior design studio based in Lebanon, focused on creating elegant, functional, and timeless spaces.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        sizes: 'any',
      },
    ],
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
