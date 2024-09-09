import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';


export default function MusicPlayer() {
  return (
    <div className="bg-primary p-6 rounded-lg w-full max-w-screen-md mx-auto shadow-md
                    border-gray-300 flex flex-col md:flex-row items-center
                    md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div className="w-full md:w-1/2">
        <CurrentlyPlaying />
      </div>

      <div className="w-full md:w-1/2">
        <Playlist />
      </div>
    </div>
  );
};
