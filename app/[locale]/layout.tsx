import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import '../../style/globals.css';
import { FavoritesProvider } from '@/app/[locale]/contexts/FavoritesContext';
import { getMessages, getTranslations } from 'next-intl/server';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import React from 'react';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'GlobalMetadata' });

  return {
    title: t('Title'),
    description: t('Description'),
    metadataBase: new URL('https://cineyami.com'),
    openGraph: {
      title: t('OG.Title'),
      description: t('OG.Description'),
      images: [
        {
          url: '/images/og-banner.jpg',
          width: 1920,
          height: 1080,
          alt: t('OG.ImageAlt')
        }
      ]
    }
  };
}

export const viewport: Viewport = {
  themeColor: '#170F1F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark'
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-gray-950 text-gray-100 antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <FavoritesProvider>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative">
              <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
              <main className="flex-1 relative z-10">
                {children}
              </main>
            </div>
          </FavoritesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
