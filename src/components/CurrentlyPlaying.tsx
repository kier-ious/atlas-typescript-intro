import { CoverArt } from './CoverArt';
import { PlayControls } from './PlayControls';
import { VolumeControl } from './VolumeControl';


export const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg space-y-4">
      <div className="flex flex-col items-start p-4 rounded-lg space-y-4">

        <div className="flex flex-col items-center w-full space-y-2">
          <CoverArt />
            {/* Song title and artist info */}
            <div className="w-full text-left">
              <h3 className="font-primary text-lg font-semibold">Painted in Blue</h3>
                <p className="text-sm text-gray-500">Soul Canvas</p>
            </div>
          </div>

          {/* PlayControls */}
          <div className="flex justify-center w-full">
            <PlayControls />
          </div>

          {/* VolumeControls */}
          <div className="flex justify-center w-full">
          <VolumeControl />
          </div>
      </div>
    </div>
  );
};
