import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import { notFound } from 'next/navigation';

export default async function Page({ searchParams }) {
  const { id } = searchParams;
  const infoUrl = `${apiConfig.base}/news/ann/info?id=${id}`;

  const res = await fetch(infoUrl);
  const newsInfo = await res.json();

  if (!newsInfo || !newsInfo.id) {
    notFound();
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{newsInfo.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{newsInfo.uploadedAt}</p>
      <img
        src={newsInfo.thumbnail}
        alt={newsInfo.title}
        className="w-full h-auto object-cover rounded mb-4"
      />
      <p className="text-lg mb-4">{newsInfo.intro}</p>
      <p className="text-gray-500 leading-relaxed">{newsInfo.description}</p>
    </div>
  );
}
