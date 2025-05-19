import { FaStar } from 'react-icons/fa';

interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < value ? 'text-yellow-500' : 'text-gray-300'}
      />
    ))}
  </div>
);
