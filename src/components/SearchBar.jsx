import { useRef, useEffect } from 'react';
import { useState } from 'react';

export default function SearchBar({ tracks, setTracks }) {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchTracks = async (query) => {
    if (!query) return;

    try {
      setLoading(true);
      setError(null);

      const url = `https://api.deezer.com/search?q=${query}`;
      const proxyUrl = `https://proxy.corsfix.com/?${url}`;
      const response = await fetch(proxyUrl);

      if (!response.ok) throw new Error('Network error');

      const { data } = await response.json();
      setTracks(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTracks("Al Jarreau"); 
    inputRef.current.focus();
  }, []);

  
  const handleSearch = async (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();

    await fetchTracks(query); 
    inputRef.current.value = ''; 
    inputRef.current.focus(); 
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          className="search-bar__input"
          ref={inputRef}
          type="text"
          placeholder="Search for tracks or artists..."
        />
        <button className="search-bar__button" type="submit">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && tracks.length === 0 && <p>Nothing found.</p>}
    </>
  );
}
