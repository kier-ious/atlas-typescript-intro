import { useState, useEffect } from 'react';
import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';

interface Song {
  title: string;
  artist: string;
  duration: string;
  cover: string;
}


export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string>('');

  useEffect(() => {
    // This fetches current song playing from API and mounts component
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist')
        const data: Song[] = await response.json();
        setPlaylist(data);

        if (data.length > 0) {
          setCurrentlyPlaying(data[0].title);
        }
      } catch (error) {
        console.error('Error fetching the playlist:', error);
      }
    };

    fetchPlaylist();
  }, []);

  const handleSongSelect = (title: string) => {
    const selectedSong = playlist.find(song => song.title === title) || null;
    setCurrentlyPlaying(selectedSong);
  }

  if (!currentlyPlaying) {
    return <div className="font-primary text-2xl font-bold mb-4">Loading...</div>;
  }
  return (
    <div className="bg-primary p-6 rounded-lg w-full max-w-screen-md mx-auto shadow-md
                    border-gray-300 flex flex-col md:flex-row items-center
                    md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div className="w-full md:w-1/2">
        <CurrentlyPlaying currentSong={currentlyPlaying} />
      </div>

      <div className="w-full md:w-1/2">
        <Playlist currentlyPlaying={currentlyPlaying} onSongSelect={handleSongSelect} playlist={playlist}/>
      </div>
    </div>
  );
};
