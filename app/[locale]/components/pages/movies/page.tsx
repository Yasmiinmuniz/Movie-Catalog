'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMovies } from '@/app/[locale]/hooks/useMovies';
import MovieCard from '@/app/[locale]/components/molecules/MovieCard';
import Header from '@/app/[locale]/components/organisms/Header';
import Footer from '@/app/[locale]/components/organisms/Footer';
import { Input } from '@/app/[locale]/components/atoms/Input';
import Button from '@/app/[locale]/components/atoms/Button';
import { useTranslations } from 'next-intl';

const categories = [
  { label: 'Todos', value: 'marvel' },
  { label: 'Ação', value: 'action' },
  { label: 'Comédia', value: 'comedy' },
  { label: 'Drama', value: 'drama' },
  { label: 'Terror', value: 'horror' },
  { label: 'Ficção', value: 'sci-fi' },
  { label: 'Romance', value: 'romance' },
  { label: 'Animação', value: 'animation' },
];

export default function MoviesPage() {
  const t = useTranslations('MoviesPage');

  const [query, setQuery] = useState('marvel');
  const [search, setSearch] = useState('marvel');
  const [selectedCategory, setSelectedCategory] = useState<string>('marvel');

  const { movies, loading, error } = useMovies(search);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(query);
    setSelectedCategory('');
  };

  const handleCategoryClick = (category: string) => {
    setSearch(category);
    setQuery(category);
    setSelectedCategory(category);
  };

  const translatedCategories = categories.map(cat => ({
    ...cat,
    label: t(`Categories.${cat.value.charAt(0).toUpperCase() + cat.value.slice(1)}`)
  }));

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          {t('Title')}
        </h1>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {translatedCategories.map((cat) => ( 
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === cat.value
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat.label} 
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto"
        >
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('SearchInputPlaceholder')} 
            className="flex-1 bg-gray-800 border-gray-700 text-white"
          />
          <Button
            type="submit"
            className="sm:w-auto px-8 bg-red-500 hover:bg-red-600"
          >
            {t('SearchButton')} 
          </Button>
        </form>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-80 bg-gray-800 rounded-xl animate-pulse"
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-red-400 text-lg py-8">
            {t('ErrorMessage', { error: error })} 
          </p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <Link
                key={movie.imdbID}
                href={`/movies/${movie.imdbID}`}
                className="group transform transition duration-300 hover:scale-105"
              >
                <MovieCard
                  movie={movie}
                /> 
              </Link>
            ))}
          </div>
        )}
        {!loading && !error && movies.length === 0 && search !== 'marvel' && ( 
          <p className="text-center text-gray-400 text-lg py-8">
            {t('NoResultsMessage')}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}