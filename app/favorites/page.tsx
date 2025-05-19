'use client';

import { useEffect, useState } from 'react';
import MovieCard from '@/components/molecules/MovieCard';
import { Movie } from '@/types/movie';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
        <h1 className="text-4xl font-extrabold mb-10 text-center">Seus Filmes Favoritos</h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">Você ainda não adicionou filmes aos favoritos.</p>
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
