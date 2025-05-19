'use client';

import { useMovies } from '@/hooks/useMovies';
import MovieCard from '@/components/molecules/MovieCard';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Link from 'next/link';

export default function HomePage() {
  const { movies, loading, error } = useMovies('action');
  const highlightedMovies = movies.slice(0, 6);

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/40 to-transparent z-10" />

          <div className="container relative z-20 px-6 mx-auto text-center lg:text-left">
            <div className="max-w-2xl lg:ml-16">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  Filmes que você ama
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Descubra, assista e compartilhe seus filmes favoritos em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#destaques"
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Explorar
                </a>
                <Link
                  href="/movies"
                  className="px-8 py-3 bg-gray-800 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  Ver Catálogo
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="destaques" className="py-16 bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-10 px-4">
              <h2 className="text-3xl font-bold">
                <span className="border-l-4 border-red-500 pl-3">Em Destaque</span>
              </h2>
              <Link href="/movies" className="text-gray-400 hover:text-white transition-colors">
                Ver todos →
              </Link>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-900 rounded-lg overflow-hidden h-96 animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
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
