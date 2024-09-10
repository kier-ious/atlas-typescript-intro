import { FC } from 'react';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

export const VolumeControl: FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(Number(event.target.value));
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="volume" className="text-gray-600">Volume</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="w-32"
      />
      <span>{volume}</span>
    </div>
  );
};
