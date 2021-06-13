import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import Footer from './Footer';

// const {REACT_APP_YOUTUBE_API_KEY} = process.env 

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('zepla HQ');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };
  //The above can be refactored into setSelectedVideo - rule when you are passing one and the same argument into a function.

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
