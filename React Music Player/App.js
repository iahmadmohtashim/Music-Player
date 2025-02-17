import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  const videos = [
    { title: 'Video 1', url: 'video1.mp4' },
    { title: 'Video 2', url: 'video2.mp4' },
    { title: 'Video 3', url: 'video3.mp4' },
  ];

  return (
    <div>
      <h1>React Video Player</h1>
      <VideoPlayer videos={videos} />
    </div>
  );
};

export default App;