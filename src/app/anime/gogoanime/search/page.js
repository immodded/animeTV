import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { notFound } from 'next/navigation'

export default async function Page({params,searchParams}) {
  const {query = '', page = 1 } = searchParams;
  if (!query){
    notFound()
}
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.search(query , page)}`;
  const res = await fetch(PageUrl);
  const episodes = await res.json();
  return (
    <div>
      <h1>search results</h1>
      <ul>
        {episodes['results'].map(episode => (
          <li key={episode.id}>{episode.title}</li>
        ))}
      </ul>
    </div>
  );
}

