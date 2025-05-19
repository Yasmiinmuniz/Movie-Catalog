'use client';

import { useState, useEffect } from 'react';
import { FiHeart, FiShare2, FiStar } from 'react-icons/fi';
import { Movie } from '@/types/movie';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  movie: Movie;
  variant?: 'default' | 'featured';
}

export default function MovieCard({ movie, variant = 'default' }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((fav: Movie) => fav.imdbID === movie.imdbID));
  }, [movie.imdbID]);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;
    
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav: Movie) => fav.imdbID !== movie.imdbID);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  const shareMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: `Confira o filme: ${movie.Title}`,
        text: `Eu encontrei este incrível filme: ${movie.Title}`,
        url: `${window.location.origin}/movies/${movie.imdbID}`,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/movies/${movie.imdbID}`);
      // Você poderia usar um toast de notificação aqui
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <article 
      className={`group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${variant === 'featured' ? 'h-[500px]' : 'h-[400px]'} hover:shadow-xl hover:z-10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem do filme com overlay gradiente */}
      <div className="relative w-full h-full">
        <Link 
          href={`/movies/${movie.imdbID}`} 
          className="block w-full h-full"
          aria-label={`Ver detalhes de ${movie.Title}`}
        >
          <Image
            src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'}
            alt={`Poster do filme ${movie.Title}`}
            fill
            className={`object-cover transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={variant === 'featured'}
          />
        </Link>

        {/* Overlay gradiente */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent transition-opacity ${isHovered ? 'opacity-100' : 'opacity-90'}`} />

        {/* Badge de avaliação */}
        {movie.imdbRating && movie.imdbRating !== 'N/A' && (
          <div className="absolute top-4 left-4 flex items-center bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-yellow-400 z-10">
            <FiStar className="mr-1 fill-current" />
            {movie.imdbRating}
          </div>
        )}

        {/* Botões de ação */}
        <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <button
            onClick={toggleFavorite}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            className="p-2 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-red-600/90 transition-colors"
            title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <FiHeart className={`text-xl ${isFavorite ? 'fill-current text-red-500' : 'text-white'}`} />
          </button>
          
          <button
            onClick={shareMovie}
            aria-label="Compartilhar filme"
            className="p-2 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-blue-600/90 transition-colors"
            title="Compartilhar filme"
          >
            <FiShare2 className="text-xl text-white" />
          </button>
        </div>
      </div>

      {/* Informações do filme */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-16'}`}>
        <div className="mb-2 flex flex-wrap gap-2">
          {movie.Genre?.split(',').map((genre, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300"
            >
              {genre.trim()}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">
          <Link 
            href={`/movies/${movie.imdbID}`}
            className="hover:text-red-400 transition-colors"
          >
            {movie.Title}
          </Link>
        </h3>
        
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{movie.Year}</span>
          <span>{movie.Runtime || 'N/A'}</span>
        </div>
      </div>

      {/* Efeito hover para destaque */}
      {variant === 'featured' && (
        <div className={`absolute inset-0 border-2 border-transparent transition-all duration-300 ${isHovered ? 'border-red-500' : ''}`} />
      )}
    </article>
  );
}