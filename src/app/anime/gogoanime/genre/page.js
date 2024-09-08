import apiConfig from '../../../api.config.js'; // Adjust the import path as needed

export default async function Page({params,searchParams}) {
  const {genre ="", page = 1 } = searchParams;
  const route = params.route
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.genre(genre,page)}`;
  // top-airing, movies,popular
  const res = await fetch(PageUrl);
  const episodes = await res.json();
  return (
    <div>
      <h1>`{genre} Episodes`</h1>
      <ul>
        {episodes['results'].map(episode => (
          <li key={episode.id}>{episode.title} - {episode.id }</li>
        ))}
      </ul>
    </div>
  );
}

