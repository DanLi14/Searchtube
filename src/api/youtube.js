import axios from 'axios';

// const {REACT_APP_YOUTUBE_API_KEY} = process.env

// const KEY = `${REACT_APP_YOUTUBE_API_KEY}`;

const KEY = 'AIzaSyAhx0FOXoYFuLHdFgbdHL_xRDIBGezlOss';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
