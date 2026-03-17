import { Star } from 'lucide-react';

export function StarRating({ rating = 5, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < rating ? 'fill-energy-400 text-energy-400' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}
