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
        url: '/images/og-banner.jpg', // Coloque sua imagem em public/images/og-banner.jpg
        width: 1920,
        height: 1080,
        alt: 'CineYami - Catálogo de Filmes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  }
}

export const viewport: Viewport = {
  themeColor: '#170F1F',
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
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
      </head>
      <body className={`${poppins.variable} font-sans bg-gray-950 text-gray-100 antialiased`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative">
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
          
          <main className="flex-1 relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}