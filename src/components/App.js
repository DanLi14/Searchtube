import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);



  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };
  //The above can be refactored into setSelectedVideo - rule when you are passing one and the same argument into a function.

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
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
    </div>
  );
};

export default App;
