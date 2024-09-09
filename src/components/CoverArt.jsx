import React from 'react';
import placeholder from '../assets/placeholder.svg';


export const CoverArt = () => {
  return (
    <div className='border-4 border-accent w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden'>
      <img
        src={placeholder}
        alt="Cover Art"
        className="object-cover w-full h-full" />
    </div>
  );
};
