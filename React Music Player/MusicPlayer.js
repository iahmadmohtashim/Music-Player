import React, { useState, useRef } from 'react';
import SongList from './SongList';

const MusicPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const playSong = (index) => {
    setCurrentSongIndex(index);
    audioRef.current.src = songs[index].url;
    audioRef.current.play();
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  };

  const playPrevious = () => {
    const previousIndex =
      (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(previousIndex);
  };

  return (
    <div>
      <h2>Now Playing</h2>
      <p>
        {songs[currentSongIndex].title} by {songs[currentSongIndex].artist}
      </p>
      <audio ref={audioRef} controls />
      <div>
        <button onClick={playPrevious}>Previous</button>
        <button onClick={playNext}>Next</button>
      </div>
      <SongList songs={songs} playSong={playSong} />
    </div>
  );
};

export default MusicPlayer;