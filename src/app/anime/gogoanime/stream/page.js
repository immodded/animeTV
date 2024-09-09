import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { notFound } from 'next/navigation';

export default async function Page({ params, searchParams }) {
  const { episodeId = '', serverName = 'gogocdn' } = searchParams;
  
  if (!episodeId) {
    notFound();
  }

  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.streamepisode(episodeId, serverName)}`;
  const res = await fetch(PageUrl);
  const infodata = await res.json();

  if (!infodata.sources || infodata.sources.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Episode {episodeId}</h1>
      
      {/* Streaming Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Available Streams</h2>
        <ul className="flex flex-col space-y-2">
          {infodata.sources.map((source, index) => (
            <li key={index} className="flex items-center">
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline mr-2"
              >
                {source.quality} - {source.isM3U8 ? 'M3U8' : 'Other Format'}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Download Link */}
      {infodata.download && (
        <div className="mt-4">
          <a 
            href={infodata.download} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            Download Episode
          </a>
        </div>
      )}
    </div>
  );
}
