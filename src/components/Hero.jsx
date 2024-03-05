import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        {/*Overlay */}
        <div className='absolute w-full h-full text-gray-200 bg-black/60 max-h-[500px] flex flex-col justify-center'>
          <h1 className='text-xl sm:text-5xl md:text-6xl lg:text-7xl px-4 font-bold'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='text-xl sm:text-5xl md:text-6xl lg:text-7xl px-4 font-bold'>
            <span className='text-orange-500'>Foods </span>
            <span>Delivered</span>
          </h1>
        </div>
        <img
          className='object-cover max-h-[500px] w-full '
          src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ></img>
      </div>
    </div>
  );
};

export default Hero;
