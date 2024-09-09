import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { Card } from '@/app/ui/cards.js';
import Link from 'next/link';
import { notFound } from 'next/navigation'


export default async function Page({ params, searchParams }) {
  const { page = 1 } = searchParams;
  const route = params.route;
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.route(route, page)}`;

  const res = await fetch(PageUrl);
  const episodes = await res.json();
  if (!episodes['results']){
    notFound()
}
  const currentPage = episodes['currentPage'];
  const hasNextPage = episodes['hasNextPage'];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{`${route} Episodes`}</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {episodes['results'].map(episode => (
          <Card key={episode.id} episode={episode} />
        ))}
      </div>
      <div className="pagination mt-4 flex justify-between items-center">
        {/* Previous Page Link */}
        <Link
          href={{ pathname: `/anime/gogoanime/${route}`, query: { page: currentPage - 1 } }}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-disabled={currentPage <= 1}
        >
          Previous
        </Link>

        {/* Current Page Display */}
        <span className="self-center text-lg">{`Page ${currentPage}`}</span>

        {/* Next Page Link */}
        <Link
          href={{ pathname: `/anime/gogoanime/${route}`, query: { page: parseInt(currentPage) + 1 } }}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${!hasNextPage ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-disabled={!hasNextPage}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
