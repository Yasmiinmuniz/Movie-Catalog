'use client';

import React, { useState } from 'react';
import { useMovies } from '@/hooks/useMovies';
import MovieCard from '@/components/molecules/MovieCard';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Link from 'next/link';

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

  return (
    <div className="flex flex-col min-h-screen bg-dark text-light">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-display tracking-tighter text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Catálogo de Filmes
        </h1>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-primary text-dark shadow-lg shadow-primary/40'
                  : 'bg-mid text-light/90 hover:bg-mid/80 hover:text-white shadow-md shadow-dark/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-12 justify-center max-w-2xl mx-auto"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar filmes..."
              className="w-full px-6 py-3.5 bg-mid border-2 border-mid rounded-xl shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-light/60"
            />
          </div>
          <button
            type="submit"
            className="sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-light font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Buscar
          </button>
        </form>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-mid rounded-xl shadow-lg shimmer" />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-red-400 text-lg font-medium py-12">
            {error}
          </p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <Link 
                key={movie.imdbID} 
                href={`/movies/${movie.imdbID}`}
                className="group transform transition duration-300 hover:scale-105 hover:z-10"
              >
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
