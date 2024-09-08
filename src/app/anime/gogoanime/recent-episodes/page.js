import apiConfig from '../../../api.config.js'; // Adjust the import path as needed

export default async function Page({params,searchParams}) {
  const { type = 1, page = 1 } = searchParams;
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.recentEpisodes(type , page)}`;
  const res = await fetch(PageUrl);
  const episodes = await res.json();
  return (
    <div>
      <h1>Recent Episodes</h1>
      <ul>
        {episodes['results'].map(episode => (
          <li key={episode.id}>{episode.title}</li>
        ))}
      </ul>
    </div>
  );


}

