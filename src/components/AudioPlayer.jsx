import { useState, useRef } from 'react';

export default function AudioPlayer({ url }) {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='player'>
      <audio ref={audioRef} src={url} onEnded={() => setIsPlaying(false)} />
      <button className='player__button' onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play Preview'}
      </button>
    </div>
  );
}
