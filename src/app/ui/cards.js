import Link from 'next/link';

export function Card({ episode }) {
  // Ensure genres is defined and is an array
  const genres = Array.isArray(episode.genres) ? episode.genres : [];

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 lg:w-60 p-4 m-2">
      <img 
        src={episode.image} 
        alt={episode.title} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="card-content">
        <Link href={`/anime/gogoanime/info?id=${episode.id}`} className="card-title text-xl font-bold text-gray-800 hover:text-blue-600">
            {episode.title}
         
        </Link>
        {/* Render genres only if there are any */}
        {genres.length > 0 && (
          <div className="card-genres mt-2 flex flex-wrap gap-2">
            {genres.map((genre, index) => (
              <Link 
                key={index} 
                href={`/anime/gogoanime/genre?genre=${encodeURIComponent(genre)}`} className="card-genre bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-full px-3 py-1 text-sm font-medium">
                  {genre}
               
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
