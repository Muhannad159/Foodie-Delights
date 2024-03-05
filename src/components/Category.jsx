import React from 'react';
import { categories } from '../data/data.js';
const Category = () => {
  return (
    <div className='max-w-[1640] m-auto px-4 py-12'>
      <h1 className='text-center text-orange-600 text-4xl font-bold'>
        Top Rated Menu Items
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
        {categories.map((item) => (
          <div className='bg-gray-100 flex justify-between items-center rounded-lg p-4'>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
