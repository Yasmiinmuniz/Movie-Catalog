'use client';

import { useMovies } from '@/app/[locale]/hooks/useMovies';
import MovieCard from '@/app/[locale]/components/molecules/MovieCard';
import Header from '@/app/[locale]/components/organisms/Header';
import Footer from '@/app/[locale]/components/organisms/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const { movies, loading, error } = useMovies('action');
  const highlightedMovies = movies.slice(0, 6);

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-950 text-white">
        <section
          role="banner"
          aria-label={t('Banner.AriaLabel')}
          className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/images/banner.jpg"
            alt={t('Banner.AltText')}
            fill
            className="object-cover object-center absolute inset-0 z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/70 to-black z-10" />

          <div className="relative z-20 container px-6 text-center lg:text-left">
            <div className="max-w-2xl lg:ml-16">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  {t('Hero.Title')}
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                {t('Hero.Description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const section = document.getElementById('destaques');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {t('Hero.ExploreButton')}
                </button>

                <Link
                  href="/movies"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {t('Hero.CatalogButton')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="destaques" aria-labelledby="heading-destaques" className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-10 px-4">
              <h2 id="heading-destaques" className="text-3xl font-bold">
                <span className="border-l-4 border-red-500 pl-3">
                  {t('FeaturedSection.Title')}
                </span>
              </h2>
              <Link
                href="/movies"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {t('FeaturedSection.ViewAllLink')}
              </Link>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg h-96 animate-pulse" aria-hidden="true" />
                ))}
              </div>
            ) : error ? (
              <p className="text-red-500 text-center">{t('FeaturedSection.Error')}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {highlightedMovies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}