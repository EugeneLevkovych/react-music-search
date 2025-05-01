import AudioPlayer from "./AudioPlayer";

export default function TrackList({ tracks }) {
    return (
      <div className="track-grid">
        {tracks.map(track => (
          <div key={track.id} className="track-card">
            <img 
              src={track.album?.cover_medium} 
              alt={track.album?.title}
            />
            <h3>{track.title}</h3>
            <p>{track.artist.name}</p>
            {track.preview && <AudioPlayer url={track.preview} />}
          </div>
        ))}
      </div>
    );
  }
  