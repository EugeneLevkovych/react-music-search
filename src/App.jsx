import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';


export default function App() {
 
  const [tracks, setTracks] = useState([]);

  return ( 
      <>
      <Header />
      <SearchBar 
        setTracks={setTracks}
        tracks={tracks}
      /> 
      <TrackList tracks={tracks} />
    </>
  );
}

