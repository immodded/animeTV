import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params, searchParams }) {
  const { id = '' } = searchParams;
  if (!id) {
    notFound();
  }
  
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.info(id)}`;
  const res = await fetch(PageUrl);
  const infodata = await res.json();

  return (
    <div className="container mx-auto p-4">
      {/* Anime Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">{infodata.title}</h1>

      {/* Anime Info Section */}
      <div className="flex flex-col lg:flex-row lg:items-start mb-6">
        {/* Image */}
        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
          <img 
            src={infodata.image} 
            alt={infodata.title} 
            className="w-full lg:w-60 rounded-md shadow-md"
          />
        </div>

        {/* Description and Details */}
        <div className="flex-grow">
          {/* Other Names */}
          {infodata.otherName && (
            <p className="text-gray-300 text-sm mb-2">
              <strong>Other Name:</strong> {infodata.otherName}
            </p>
          )}

          {/* Release Date */}
          {infodata.releaseDate && (
            <p className="text-gray-300 text-sm mb-2">
              <strong>Release Date:</strong> {infodata.releaseDate}
            </p>
          )}

          {/* Status */}
          {infodata.status && (
            <p className="text-gray-300 text-sm mb-2">
              <strong>Status:</strong> {infodata.status}
            </p>
          )}

          {/* Sub or Dub */}
          {infodata.subOrDub && (
            <p className="text-gray-300 text-sm mb-2">
              <strong>Type:</strong> {infodata.subOrDub}
            </p>
          )}

          {/* Genres */}
          <div className="flex flex-wrap mb-4">
          {infodata.genres.map((genre, index) => (
              <Link 
                key={index} 
                href={`/anime/gogoanime/genre?genre=${encodeURIComponent(genre)}`} className="card-genre bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-full px-3 py-1 text-sm font-medium">
                  {genre}
               
              </Link>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">
            {infodata.description}
          </p>
        </div>
      </div>

      {/* Episodes List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Episodes</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {infodata.episodes.map(episode => (
            <Link 
              key={episode.id} 
              className="block bg-gray-200 text-gray-800 py-2 px-4 rounded text-center hover:bg-gray-300" href={`/anime/gogoanime/stream?episodeId=${episode.id}`} rel="noopener noreferrer" >
                Episode {episode.number}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
