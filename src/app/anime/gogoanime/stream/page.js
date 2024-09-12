import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link.js';
const VideoPlayer = dynamic(() => import('@/app/ui/videoplayer.js'), {
  ssr: false, 
});

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

  // Find the source with quality 'default'
  const defaultSource = infodata.sources.find(source => source.quality === 'default');

  // Define the available servers
  const servers = ["gogocdn", "streamsb", "vidstreaming"];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Episode {episodeId}</h1>
      
      {/* Video Player */}
      {defaultSource && (
        <div className="mb-6">
          <VideoPlayer url={defaultSource.url} />
        </div>
      )}

      {/* Change Server */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Change Server</h3>
        <div className="flex flex-wrap gap-2">
          {servers.map((server,index) => (
              <Link 
                key={index}
                href={`/anime/gogoanime/stream?episodeId=${episodeId}&serverName=${server}`} 
                className={`block bg-gray-200 text-gray-800 py-2 px-4 rounded text-center hover:bg-gray-300 ${serverName === server ? 'font-bold' : ''}`}
              >
                {server}
              </Link>
          ))}
        </div>
      </div>

      {/* Streaming Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Available Streams</h2>
        <ul className="flex flex-col space-y-2">
          {infodata.sources.map((source, index) => (
            <li key={index} className="flex items-center">
              <a
                href={`/play?url=${source.url}`}
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
           className="bg-gray-200 text-gray-800 py-2 px-4 rounded text-center hover:bg-gray-300">
            Download Episode
          </a>
        </div>
      )}
    </div>
  );
}
