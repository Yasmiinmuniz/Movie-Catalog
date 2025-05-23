'use client';

import { useEffect, useState } from 'react';
import { Movie } from '@/types/movie';
import { fetchMovies } from '@/api/api';

export function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchMovies(query);

        if (result.Response === 'True') {
          setMovies(result.Search);
        } else {
          setMovies([]);
          setError('Nenhum filme encontrado.');
        }
      } catch (err) {
        setMovies([]);
        setError('Erro ao buscar filmes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [query]);

  return { movies, loading, error };
}
