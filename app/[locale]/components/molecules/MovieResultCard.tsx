import { Movie } from '@/types/movie';
import { useTranslations } from 'next-intl';

interface MovieResultCardProps {
  movie: Movie;
}

export default function MovieResultCard({ movie }: MovieResultCardProps) {
  const t = useTranslations('MovieResultCard');

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition flex gap-4">
      {movie.Poster !== 'N/A' ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-24 h-36 object-cover rounded"
        />
      ) : (
        <div className="w-24 h-36 bg-gray-600 flex items-center justify-center rounded text-sm text-gray-300">
          {t('NoImage')}
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold">{movie.Title}</h3>
        <p className="text-gray-400">{t('Year')}: {movie.Year}</p>
        <p className="text-gray-400">{t('Type')}: {movie.Type}</p>
      </div>
    </div>
  );
}