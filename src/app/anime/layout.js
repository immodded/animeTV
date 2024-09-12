// app/anime/gogoanime/layout.js
export default function AnimeLayout({ children }) {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <main className="p-4">
        <form action="/anime/gogoanime/search" method="get" className="flex mb-4">
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Search..."
            className="flex-1 px-4 py-2 rounded-l bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </form>
        {children}
      </main>
    </div>
  );
}
