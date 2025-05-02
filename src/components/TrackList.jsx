import AudioPlayer from "./AudioPlayer";

export default function TrackList({ tracks }) {
    return (
      <ul className="track-list">
        {tracks.map(track => (
          <li key={track.id} className="track-list__card">
            <img 
              src={track.album?.cover_medium} 
              alt={track.album?.title}
            />
            <h3>{track.title}</h3>
            <p>{track.artist.name}</p>
            {track.preview && <AudioPlayer url={track.preview} />}
          </li>
        ))}
      </ul>
    );
  }
  