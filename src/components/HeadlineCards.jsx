import React from 'react';
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/*Card */}
      <div className='rounded-xl relative'>
        {/*Overlay */}
        <div className='absolute text-white bg-black/40 w-full h-full rounded-xl'>
          <p className='px-2 font-bold text-2xl pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white/90 text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt='/'
        />
      </div>
      <div className='rounded-xl relative'>
        {/*Overlay */}
        <div className='absolute text-white bg-black/40 w-full h-full rounded-xl'>
          <p className='px-2 font-bold text-2xl pt-4'>New Restaurants</p>
          <p className='px-2'>Added daily</p>
          <button className='border-white bg-white/90 text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/765082/pexels-photo-765082.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
      <div className='rounded-xl relative'>
        {/*Overlay */}
        <div className='absolute text-white bg-black/40 w-full h-full rounded-xl'>
          <p className='px-2 font-bold text-2xl pt-4'>
            We Deliver Desserts Too
          </p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white/90 text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
