import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { Card } from '@/app/ui/cards.js';

export default async function Page({ params, searchParams }) {
  const { page = 1 } = searchParams;
  const route = params.route;
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.route(route, page)}`;

  const res = await fetch(PageUrl);
  const episodes = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{`${route} Episodes`}</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {episodes['results'].map(episode => (
          <Card key={episode.id} episode={episode} />
        ))}
      </div>
      <div className="pagination mt-4 flex justify-between">
        <Link
          disabled={episodes['currentPage'] <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          Previous
        </Link>
        <span className="self-center text-lg">{`Page ${episodes['currentPage']}`}</span>
        <button
          disabled={!episodes['hasNextPage']}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
