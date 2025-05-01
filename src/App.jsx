import { useState } from 'react';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';


export default function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="container">
      <h1>Music Search</h1>
      <SearchBar 
        setTracks={setTracks}
        setLoading={setLoading}
        setError={setError}
      />
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && tracks.length === 0 && <p>Nothihg found </p>}
      
      <TrackList tracks={tracks} />
    </div>
  );
}

