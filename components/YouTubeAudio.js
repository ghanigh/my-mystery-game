import React from 'react';
import YouTube from 'react-youtube';

const YouTubeAudio = () => {
  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: 'qgPSTtl3zOU', // Nécessaire pour que loop fonctionne
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  const onReady = (event) => {
    event.target.setVolume(50); // Volume à 50% (modifiable)
  };

  return (
    <div style={{ display: 'none' }}>
      <YouTube videoId="qgPSTtl3zOU" opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubeAudio;
