'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { fetchMovies } from '@/api/api';
import { Movie } from '@/types/movie';
import MovieResultCard from '@/app/[locale]/components/molecules/MovieResultCard';
import Header from '@/app/[locale]/components/organisms/Header';
import Footer from '@/app/[locale]/components/organisms/Footer';
import { Input } from '@/app/[locale]/components/atoms/Input';
import Button from '@/app/[locale]/components/atoms/Button';
import { useTranslations } from 'next-intl';

export default function SearchPage() {
  const t = useTranslations('SearchPage');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    setLoading(true);
    setErrorMessage('');
    setResults([]);

    try {
      const data = await fetchMovies(query);

      if (data.Response === 'False') {
        setErrorMessage(data.Error || t('NoResultsFallback'));
      } else {
        setResults(data.Search);
      }
    } catch {
      setErrorMessage(t('FetchError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white">
      <Header />

      <main className="flex-1 p-6 max-w-3xl mx-auto w-full">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">{t('Title')}</h1>
          <p className="text-gray-400">{t('Description')}</p>
        </section>

        <form onSubmit={handleSearch} className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <Input
              type="text"
              name="query"
              placeholder={t('SearchInputPlaceholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ paddingLeft: '2.5rem' }}
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? t('SearchingButton') : t('SearchButton')}
          </Button>
        </form>

        {errorMessage && (
          <p className="text-center text-red-400 mb-4">{errorMessage}</p>
        )}

        {results.length > 0 && (
          <section className="space-y-4">
            {results.map((movie) => (
              <MovieResultCard key={movie.imdbID} movie={movie} />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}