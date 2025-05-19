import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import '../style/globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'CineYami',
  description: 'Explore o melhor catálogo de filmes com tecnologia OMDB API',
  metadataBase: new URL('https://cineyami.com'),
  openGraph: {
    title: 'CineYami | Descubra Filmes Incríveis',
    description: 'Explore o melhor catálogo de filmes com tecnologia OMDB API',
    images: [
      {
        url: '../public/images/logoCineYaMi.png',
        width: 1200,
        height: 630,
      },
    ],
  }
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} font-sans bg-gray-950 text-gray-100 antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}