'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Movie } from '@/types/movie';
import { useTranslations } from 'next-intl';

interface FavoritesContextProps {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.imdbID === movie.imdbID);
      return exists
        ? prev.filter((fav) => fav.imdbID !== movie.imdbID)
        : [...prev, movie];
    });
  };

  const isFavorite = (id: string) => favorites.some((fav) => fav.imdbID === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const t = useTranslations('FavoritesContext');
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(t('ContextError'));
  }
  return context;
};