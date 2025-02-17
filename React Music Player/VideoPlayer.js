import React, { useState, useRef } from 'react';
import VideoList from './VideoList';

const VideoPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const playVideo = (index) => {
    setCurrentVideoIndex(index);
    videoRef.current.src = videos[index].url;
    videoRef.current.play();
  };

  const playNext = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    playVideo(nextIndex);
  };

  const playPrevious = () => {
    const previousIndex =
      (currentVideoIndex - 1 + videos.length) % videos.length;
    playVideo(previousIndex);
  };

  return (
    <div>
      <h2>Now Playing</h2>
      <p>{videos[currentVideoIndex].title}</p>
      <video ref={videoRef} controls width="600" />
      <div>
        <button onClick={playPrevious}>Previous</button>
        <button onClick={playNext}>Next</button>
      </div>
      <VideoList videos={videos} playVideo={playVideo} />
    </div>
  );
};

export default VideoPlayer;