import { FC } from 'react';
import { CoverArt } from './CoverArt';
import { PlayControls } from './PlayControls';
import { VolumeControl } from './VolumeControl';

interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
}

interface CurrentlyPlayingProps {
  currentSong: Song;
  onBack: () => void;
  onForward: () => void;
  speed: number;
  onSpeedChange: () => void;
  isPlaying: boolean;
  onPlayPause: () => void;}

  export const CurrentlyPlaying: FC<CurrentlyPlayingProps> = ({
    currentSong,
    onBack,
    onForward,
    speed,
    onSpeedChange,
    isPlaying,
    onPlayPause
  }) => {
    if (!currentSong) {
      return <div className="font-primary text-2xl font-bold mb-4">Loading...</div>;
    }
  return (
    <div className="flex flex-col items-center p-4 rounded-lg space-y-4">
      <div className="flex flex-col items-start p-4 rounded-lg space-y-4">
        <div className="flex flex-col items-center w-full space-y-2">
          <CoverArt cover={currentSong.cover}/>
            {/* Song title and artist info */}
            <div className="w-full text-left">
              <h3 className="font-primary text-lg font-semibold">{currentSong.title}</h3>
                <p className="text-sm text-gray-500">{currentSong.artist}</p>
            </div>
          </div>

          {/* PlayControls */}
          <div className="flex justify-center w-full">
            <PlayControls
              onBack={onBack}
              onForward={onForward}
              speed={speed}
              onSpeedChange={onSpeedChange}
              isPlaying={isPlaying}
              onPlayPause={onPlayPause}
            />
          </div>

          {/* VolumeControls */}
          <div className="flex justify-center w-full">
          <VolumeControl />
          </div>
      </div>
    </div>
  );
};
