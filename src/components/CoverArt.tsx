import React from 'react';


interface CoverArtProps {
  coverArtUrl: string;
}

export const CoverArt: React.FC<CoverArtProps> = ({ coverArtUrl }) => {
  return (
    <div className='border-4 border-accent w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden'>
      <img
        src={coverArtUrl}
        alt="Cover Art"
        className="object-cover w-full h-full" />
    </div>
  );
};
