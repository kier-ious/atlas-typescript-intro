import { useState, useEffect } from 'react';
import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';


interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}


export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Song | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false)

  useEffect(() => {
    // This fetches current song playing from API and mounts component
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist')
        const data: Song[] = await response.json();
        setPlaylist(data);

        if (data.length > 0) {
          setCurrentlyPlaying(data[0]);
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
    setCurrentSongIndex(playlist.indexOf(selectedSong as Song));
  };

  const handleBack = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
      setCurrentlyPlaying(playlist[newIndex] || null);
      return newIndex;
    });
  };

  const handleForward = () => {
    setCurrentSongIndex((prevIndex) => {
      const newIndex = prevIndex < playlist.length - 1 ? prevIndex + 1 : playlist.length - 1;
      setCurrentlyPlaying(playlist[newIndex] || null);
      return newIndex;
    });
  };

  const handleSpeedChange = () => {
    setSpeed(prevSpeed => (prevSpeed === 1 ? 2 : prevSpeed === 2 ? 3 : 1));
  };

  const handlePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  }

  const handleShuffle = () => {
    setShuffle(prevShuffle => !prevShuffle);
  }

  if (!currentlyPlaying) {
    return <div className="font-primary text-2xl font-bold mb-4">Loading...</div>;
  }


  return (
    <div className="bg-primary p-6 rounded-lg w-full max-w-screen-md mx-auto shadow-md
                    border-gray-300 flex flex-col md:flex-row items-center
                    md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div className="w-full md:w-1/2">
      <CurrentlyPlaying
          currentSong={currentlyPlaying}
          onBack={handleBack}
          onForward={handleForward}
          speed={speed}
          onSpeedChange={handleSpeedChange}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onShuffle={handleShuffle}
        />
      </div>
      <div className="w-full md:w-1/2">
        <Playlist
          currentlyPlaying={String(currentlyPlaying?.id || 0)}
          onSongSelect={handleSongSelect}
          playlist={playlist}
        />
      </div>


    </div>
  );
};
