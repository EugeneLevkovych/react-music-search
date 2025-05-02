import { useRef } from 'react';
import { useEffect } from 'react';

export default function SearchBar({ setTracks, setLoading, setError }) {
  const inputRef = useRef();

  //-------------------init-artist------------------------------------
  useEffect(() => {
    const fetchInitArtist = async () => {
            const initUrl = `https://proxy.corsfix.com/?https://api.deezer.com/search?q="Al Jarreau"`;
            const response = await fetch(initUrl);
        
            const { data } = await response.json();
            setTracks(data);         
        };
        fetchInitArtist();
  }, []);
//----------------------------------------------------------
  const handleSearch = async (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    
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


  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <input className='search-bar__input'
        ref={inputRef}
        type="text"
        placeholder="Search for tracks or artists..."
      />
      <button className='search-bar__button' type="submit">Search</button>
    </form>
  );
}
