import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";

function FeatureCard({title, text}) {
  return (
    <div className='flex gap-4 p-4 shadow-lg w-[400px]'>
      {/* Icon Section */}
      <div>
        <IoIosInformationCircleOutline className='text-white text-opacity-30 text-4xl' />
      </div>
      
      {/* Content Section */}
      <div className='flex flex-col items-start justify-normal'>
        <p className='text-md md:text-lg lg:text-2xl text-left'>{title}</p>
        <p className='text-sm text-white text-opacity-55'>
          {text}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
