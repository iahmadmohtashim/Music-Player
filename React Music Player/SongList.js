import React from 'react';

const SongList = ({ songs, playSong }) => {
  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.title} by {song.artist}
            <button onClick={() => playSong(index)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;