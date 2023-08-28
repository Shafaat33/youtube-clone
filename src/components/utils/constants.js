const my_google_api_key = "AIzaSyDcSlkoVO1Q2kap0CQawiTukzSsA0j2PGI";

export const YOUTUBE_API_KEY = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+my_google_api_key;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_DATA = [
  {
    name: "shafaat",
    text: "nice song to watch in 2023",
    replies: [
      {
        name: "test",
        text: "nice video to watch in 2023",
        replies: [
          {
            name: "test",
            text: "nice video to watch in 2023",
            replies: [
              {
                name: "shafaat",
                text: "nice song to watch in 2023",
                replies: [
                  {
                    name: "test",
                    text: "nice video to watch in 2023",
                    replies: [],
                  },
                  {
                    name: "test",
                    text: "nice video to watch in 2023",
                    replies: [],
                  },
                  {
                    name: "test",
                    text: "nice video to watch in 2023",
                    replies: [],
                  },
                ],
              }
            ],
          },
        ],
      },
      {
        name: "test",
        text: "nice video to watch in 2023",
        replies: [],
      },
      {
        name: "test",
        text: "nice video to watch in 2023",
        replies: [
          {
            name: "shafaat",
            text: "nice song to watch in 2023",
            replies: [
              {
                name: "test",
                text: "nice video to watch in 2023",
                replies: [],
              },
              {
                name: "test",
                text: "nice video to watch in 2023",
                replies: [],
              },
              {
                name: "test",
                text: "nice video to watch in 2023",
                replies: [],
              },
            ],
          }
        ],
      },
    ],
  },
  {
    name: "test",
    text: "nice video to watch in 2023",
    replies: [],
  },
  {
    name: "bot",
    text: "nice game to watch in 2023",
    replies: [
      {
        name: "test",
        text: "nice video to watch in 2023",
        replies: [],
      },
    ],
  },
];