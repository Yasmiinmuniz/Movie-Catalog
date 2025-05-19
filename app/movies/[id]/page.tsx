'use client';

import Link from 'next/link';
import MovieCard from '@/components/molecules/MovieCard';
import { useMovies } from '@/hooks/useMovies';

export default function MoviesPage() {
  const { movies, loading, error } = useMovies('action');

  return (
    <main className="min-h-screen bg-gray-950 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 border-l-4 border-red-600 pl-4">
          Catálogo de Filmes
        </h1>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden h-96 animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-gray-400">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <Link key={movie.imdbID} href={`/movies/${movie.imdbID}`} className="block">
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
