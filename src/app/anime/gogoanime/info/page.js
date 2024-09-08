import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { notFound } from 'next/navigation'
export default async function Page({params,searchParams}) {
    const {id = ''} = searchParams;
    if (!id){
        notFound()
    }
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.info(id)}`;
  const res = await fetch(PageUrl);
  const infodata = await res.json();
  return (
    <div>
      <h1>{infodata.title}</h1>
      <ul>
        {infodata.episodes.map(episode => (
          <li key={episode.id}>{episode.number} - {episode.id}</li>
        ))}
      </ul>
    </div>
  );


}

