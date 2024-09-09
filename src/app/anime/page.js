import Link from "next/link";

const genres = [
  { id: "action", title: "Action" },
  { id: "adult-cast", title: "Adult Cast" },
  { id: "adventure", title: "Adventure" },
  { id: "anthropomorphic", title: "Anthropomorphic" },
  { id: "avant-garde", title: "Avant Garde" },
  { id: "shounen-ai", title: "Boys Love" },
  { id: "cars", title: "Cars" },
  { id: "cgdct", title: "CGDCT" },
  { id: "childcare", title: "Childcare" },
  { id: "comedy", title: "Comedy" },
  { id: "comic", title: "Comic" },
  { id: "crime", title: "Crime" },
  { id: "crossdressing", title: "Crossdressing" },
  { id: "cultivation", title: "Cultivation" },
  { id: "delinquents", title: "Delinquents" },
  { id: "dementia", title: "Dementia" },
  { id: "demons", title: "Demons" },
  { id: "detective", title: "Detective" },
  { id: "drama", title: "Drama" },
  { id: "dub", title: "Dub" },
  { id: "ecchi", title: "Ecchi" },
  { id: "erotica", title: "Erotica" },
  { id: "family", title: "Family" },
  { id: "fantasy", title: "Fantasy" },
  { id: "gag-humor", title: "Gag Humor" },
  { id: "game", title: "Game" },
  { id: "gender-bender", title: "Gender Bender" },
  { id: "gore", title: "Gore" },
  { id: "gourmet", title: "Gourmet" },
  { id: "harem", title: "Harem" },
  { id: "hentai", title: "Hentai" },
  { id: "high-stakes-game", title: "High Stakes Game" },
  { id: "historical", title: "Historical" },
  { id: "horror", title: "Horror" },
  { id: "isekai", title: "Isekai" },
  { id: "iyashikei", title: "Iyashikei" },
  { id: "josei", title: "Josei" },
  { id: "kids", title: "Kids" },
  { id: "love-polygon", title: "Love Polygon" },
  { id: "magic", title: "Magic" },
  { id: "magical-sex-shift", title: "Magical Sex Shift" },
  { id: "mahou-shoujo", title: "Mahou Shoujo" },
  { id: "martial-arts", title: "Martial Arts" },
  { id: "mecha", title: "Mecha" },
  { id: "medical", title: "Medical" },
  { id: "military", title: "Military" },
  { id: "music", title: "Music" },
  { id: "mystery", title: "Mystery" },
  { id: "mythology", title: "Mythology" },
  { id: "organized-crime", title: "Organized Crime" },
  { id: "parody", title: "Parody" },
  { id: "performing-arts", title: "Performing Arts" },
  { id: "pets", title: "Pets" },
  { id: "police", title: "Police" },
  { id: "psychological", title: "Psychological" },
  { id: "racing", title: "Racing" },
  { id: "reincarnation", title: "Reincarnation" },
  { id: "romance", title: "Romance" },
  { id: "romantic-subtext", title: "Romantic Subtext" },
  { id: "samurai", title: "Samurai" },
  { id: "school", title: "School" },
  { id: "sci-fi", title: "Sci-Fi" },
  { id: "seinen", title: "Seinen" },
  { id: "shoujo", title: "Shoujo" },
  { id: "shoujo-ai", title: "Shoujo Ai" },
  { id: "shounen", title: "Shounen" },
  { id: "showbiz", title: "Showbiz" },
  { id: "slice-of-life", title: "Slice of Life" },
  { id: "space", title: "Space" },
  { id: "sports", title: "Sports" },
  { id: "strategy-game", title: "Strategy Game" },
  { id: "strong-male-lead", title: "Strong Male Lead" },
  { id: "super-power", title: "Super Power" },
  { id: "supernatural", title: "Supernatural" },
  { id: "survival", title: "Survival" },
  { id: "suspense", title: "Suspense" },
  { id: "system", title: "system" },
  { id: "team-sports", title: "Team Sports" },
  { id: "thriller", title: "Thriller" },
  { id: "time-travel", title: "Time Travel" },
  { id: "vampire", title: "Vampire" },
  { id: "video-game", title: "Video Game" },
  { id: "visual-arts", title: "Visual Arts" },
  { id: "work-life", title: "Work Life" },
  { id: "workplace", title: "Workplace" },
  { id: "yaoi", title: "Yaoi" },
  { id: "yuri", title: "Yuri" }
]

export default function Page() {
  return (
    <>
      <div className="mb-6">
      <Link href="/anime/gogoanime/anime-list" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">anime list
      </Link>
      <Link href="/anime/gogoanime/recent-episodes" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2">Recent Episodes
      </Link>
        <Link href="/anime/gogoanime/popular" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2">Popular
        </Link>
        <Link href="/anime/gogoanime/movies" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2">Movies
        </Link>
        <Link href="/anime/gogoanime/top-airing" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2">Top Airing
        </Link>
      </div>
      <h2 className="text-xl font-semibold mb-4">Genre</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {genres.map(genre => (
          <Link
            key={genre.id}
            href={`/anime/gogoanime/genre?genre=${genre.id}`}
           className="block bg-gray-200 text-gray-800 py-2 px-4 rounded text-center hover:bg-gray-300">
              {genre.title}
          </Link>
        ))}
      </div>
    </>
  )
}
