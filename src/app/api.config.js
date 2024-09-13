const apiConfig = {
    base: process.env.API,
    category: {
      anime: {
        gogoanime: {
          routes: {
            search: (query, page = 1) => `/anime/gogoanime/${query}?page=${page}`,
            recentEpisodes: (type = 1, page = 1) => `/anime/gogoanime/recent-episodes?type=${type}&page=${page}`,
            // sub or dub. 1: Japanese Dub, English Sub; 2: English Dub, No Sub; 3: Chinese Dub, English Sub.
            genre: (genre, page = 1) => `/anime/gogoanime/genre/${genre}?page=${page}`,
            route: (route, page = 1) => `/anime/gogoanime/${route}?page=${page}`,
            info: (id) => `/anime/gogoanime/info/${id}`,
            streamepisode: (episodeId, serverName = 'gogocdn') => `/anime/gogoanime/watch/${episodeId}?server=${serverName}`,
            // serverName options: "gogocdn", "streamsb", "vidstreaming"
          },
        },
      },
      news: {
        ann: {
          recentFeeds: () => '/news/ann/recent-feeds',
          info: (id) => `/news/ann/info?id=${id}`,
        },
      },
    },
  };
  
  // Usage examples:
  // To search for an anime:
//   const searchUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.search('naruto', 2)}`;
  // Output: 'https://api-consumet-six.vercel.app/anime/gogoanime/naruto?page=2'
  
  // To get recent episodes:
//   const recentEpisodesUrl = `${apiConfig.base}${apiConfig.category.anime.gogoanime.routes.recentEpisodes()}`;
  // Output: 'https://api-consumet-six.vercel.app/anime/gogoanime/recent-episodes'
  
  // To get recent anime news feeds:
//   const recentFeedsUrl = apiConfig.category.news.ann.recentFeeds();
  // Output: 'https://api.consumet.org/news/ann/recent-feeds'
  
  export default apiConfig;
  