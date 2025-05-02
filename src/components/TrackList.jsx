import AudioPlayer from "./AudioPlayer";

export default function TrackList({ tracks }) {
    return (
      <ul className="track-list">
        {tracks.map(track => (
          <li className="track-list__card" key={track.id}>
            <img 
              src={track.album?.cover_medium} 
              alt={track.album?.title}
            />
            <h3 className="track-list__album-title">{track.title}</h3>
            <p className="track-list__artist-name">{track.artist.name}</p>
            {track.preview && <AudioPlayer url={track.preview} />}
          </li>
        ))}
      </ul>
    );
  }
  