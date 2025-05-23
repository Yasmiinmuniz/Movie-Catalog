'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMovies } from '@/app/[locale]//hooks/useMovies';
import MovieCard from '@/app/[locale]/components/molecules/MovieCard';
import SearchBar from '@/app/[locale]/components/molecules/SearchBar';
import Header from '@/app/[locale]/components/organisms/Header';
import Footer from '@/app/[locale]/components/organisms/Footer';
import { useTranslations } from 'next-intl';

export default function MoviesPage() {
  const t = useTranslations('MoviesPage');
  const [searchTerm, setSearchTerm] = useState('action');
  const { movies, loading, error } = useMovies(searchTerm);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="flex-1 py-16 px-6 max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-10 border-l-4 border-red-600 pl-4">
          {t('Title')}
        </h1>

        <SearchBar onSearch={handleSearch} initialQuery={searchTerm} />

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden h-96 animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-red-400 font-medium text-lg mt-12">{t('ErrorMessage', { error })}</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {movies.map((movie) => (
              <Link
                key={movie.imdbID}
                href={`/movies/${movie.imdbID}`}
                className="block hover:scale-105 transform transition"
              >
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}

        {!loading && !error && movies.length === 0 && searchTerm && (
          <p className="text-center text-gray-400 font-medium text-lg mt-12">{t('NoResultsMessage')}</p>
        )}
      </main>

      <Footer />
    </div>
  );
}