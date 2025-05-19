'use client';

import React, { useState } from 'react';
import Button from '../atoms/Button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

export default function SearchBar({ onSearch, initialQuery = '' }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 mb-12 justify-center max-w-2xl mx-auto"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar filmes..."
        className="flex-1 px-6 py-3.5 bg-mid border-2 border-mid rounded-xl shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-light/60"
        aria-label="Buscar filmes"
      />
      <Button
        type="submit"
        className="sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-light font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Buscar"
      >
        Buscar
      </Button>
    </form>
  );
}
