import React from 'react';

const VideoList = ({ videos, playVideo }) => {
  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            {video.title}
            <button onClick={() => playVideo(index)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;