import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  // Custom hook rules
  //input - default video search term
  //output - list of videos and function to search for videos
  const [videos, setVideos] = useState([]);

  //   setSelectedVideo(res.data.items[0]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (term) => {
    const res = await youtube.get('/search', {
      params: { q: term },
    });
  };

  setVideos(res.data.items);

  return [videos, search];
};

export default useVideos;
