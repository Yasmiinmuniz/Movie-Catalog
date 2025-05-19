'use client';

import React, { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { FiSearch } from 'react-icons/fi';
import { fetchMovies } from '@/api/api'; 
import { Movie } from '@/types/movie';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default function SearchPage() {
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
        setErrorMessage(data.Error || 'Nenhum resultado encontrado.');
      } else {
        setResults(data.Search);
      }
    } catch {
      setErrorMessage('Erro ao buscar filmes. Verifique sua conexão ou chave da API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white">
      <Header />

      <main className="flex-1 p-6 max-w-3xl mx-auto w-full">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Pesquisar Filmes</h1>
          <p className="text-gray-400">Digite o nome de um filme para buscar.</p>
        </section>

        <form onSubmit={handleSearch} className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <Input
              type="text"
              name="query"
              placeholder="Buscar por título..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ paddingLeft: '2.5rem' }}
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </form>

        {errorMessage && (
          <p className="text-center text-red-400 mb-4">{errorMessage}</p>
        )}

        {results.length > 0 && (
          <section className="space-y-4">
            {results.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition flex gap-4"
              >
                {movie.Poster !== 'N/A' ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-24 h-36 object-cover rounded"
                  />
                ) : (
                  <div className="w-24 h-36 bg-gray-600 flex items-center justify-center rounded text-sm text-gray-300">
                    Sem imagem
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold">{movie.Title}</h3>
                  <p className="text-gray-400">Ano: {movie.Year}</p>
                  <p className="text-gray-400">Tipo: {movie.Type}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
