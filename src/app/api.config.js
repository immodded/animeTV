const apiConfig = {
    base: 'https://api-consumet-six.vercel.app',
    category: {
        anime: {
            gogoanime: {
                routes: {
                    search: (query, page = 1) => `/anime/gogoanime/${query}?page=${page}`,
                    recentEpisodes: (type = 1, page=1) => `/anime/gogoanime/recent-episodes?type=${type}&page=${page}`,
                    // sub or dub. 1: Japanese Dub, English Sub; 2: English Dub, No Sub; 3: Chinese Dub, English Sub.
                    genre: (genre, page=1) => `/anime/gogoanime/genre/${genre}?page=${page}`,
                    route: (route, page = 1) => `/anime/gogoanime/${route}?page=${page}`,
                    info: (id) =>`/anime/gogoanime/info/${id}`,
                    streamepisode : (episodeId, serverName = 'gogocdn') =>`/anime/gogoanime/watch/${episodeId}?server=${serverName}` ,
                    // serverName "gogocdn" "streamsb" "vidstreaming"
                    

                },
            },
        },
    },
};

// Usage examples:
// To search for an anime:
// const searchUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.search('naruto', 2)}`;
// Output: 'https://api-consumet-six.vercel.app/anime/gogoanime/naruto?page=2'

// To get recent episodes:
// const recentEpisodesUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.recentEpisodes()}`;
// Output: 'https://api-consumet-six.vercel.app/anime/gogoanime/recent-episodes'












export default apiConfig;