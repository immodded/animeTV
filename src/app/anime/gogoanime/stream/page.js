import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { notFound } from 'next/navigation'
export default async function Page({params,searchParams}) {
    const {episodeId = '', serverName='gogocdn'} = searchParams;
    if (!episodeId){
        notFound()
    }
  const PageUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.streamepisode( episodeId , serverName)}`;
  const res = await fetch(PageUrl);
  const infodata = await res.json();
  return (
    <div>
      <h1>{episodeId}</h1>
      <p>
      </p>
    </div>
  );


}

