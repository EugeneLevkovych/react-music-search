import { useRef } from 'react';

export default function SearchBar({ setTracks, setLoading, setError }) {
  const inputRef = useRef();

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    
    if (!query) return;

    try {
      setLoading(true);
      setError(null);

const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;

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

  return (
    <form onSubmit={handleSearch}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for tracks or artists..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
