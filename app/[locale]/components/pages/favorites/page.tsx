'use client';

import { useFavorites } from '@/app/[locale]/contexts/FavoritesContext';
import MovieCard from '@/app/[locale]/components/molecules/MovieCard';
import Header from '@/app/[locale]/components/organisms/Header';
import Footer from '@/app/[locale]/components/organisms/Footer';
import { useTranslations } from 'next-intl';

export default function FavoritesPage() {
  const t = useTranslations('FavoritesPage');
  const { favorites } = useFavorites();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
        <h1 className="text-4xl font-extrabold mb-10 text-center">
          {t('Title')}
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            {t('EmptyMessage')}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
