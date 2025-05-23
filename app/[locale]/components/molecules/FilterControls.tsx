interface FilterControlsProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export const FilterControls = ({ genres, selectedGenre, onGenreChange }: FilterControlsProps) => (
  <div className="flex flex-wrap mb-4">
    {genres.map((genre) => (
      <button
        key={genre}
        onClick={() => onGenreChange(genre)}
        className={`px-3 py-1 m-1 rounded-full ${
          selectedGenre === genre ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {genre}
      </button>
    ))}
  </div>
);
