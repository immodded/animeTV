import apiConfig from '../../../api.config.js'; // Adjust the import path as needed
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Page() {
  const PageUrl = `${apiConfig.base}${apiConfig.category.news.ann.recentFeeds()}`;
  const res = await fetch(PageUrl);
  const newsFeeds = await res.json();
  if (!newsFeeds || newsFeeds.length === 0) {
    notFound();
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recent Feeds</h1>
      <ul className="news-list">
        {newsFeeds.map((news, index) => (
            <li key={index}><Link href={`/news/ann/info?id=${news.id}`}  className="news-item text-lg font-semibold text-blue-500 hover:underline">
                {news.title}
            </Link><p className="text-sm text-gray-500">{news.uploadedAt}</p></li>
        ))}
      </ul>
    </div>
  );
}
