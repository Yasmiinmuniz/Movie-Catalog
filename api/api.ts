import { MovieSearchResult, Movie } from '@/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com';

if (!API_KEY) {
  throw new Error('OMDB API key não encontrada. Defina NEXT_PUBLIC_OMDB_API_KEY no .env');
}

export const fetchMovies = async (
  searchTerm: string,
  page = 1
): Promise<MovieSearchResult> => {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&page=${page}`);
  return res.json();
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${id}&plot=full`);
  return res.json();
};
