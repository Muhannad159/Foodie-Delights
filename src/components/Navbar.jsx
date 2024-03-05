import React, { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill, BSFillSaveFill } from 'react-icons/bs';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='Navbar max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/*Left Side*/}
      <div className='left-side flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu onClick={() => setNav(true)} size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl ml-6'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center rounded-full p-1 text-[14px] bg-gray-200 ml-10'>
          <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/*Search Input */}
      <div className='search-input flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search food'
        />
      </div>
      {/*Cart Buuton */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />
        Cart
      </button>
      {/*Mobile Menu */}
      {/*Ovarlay */}
      {nav && (
        <div className='w-full h-screen bg-black/70 fixed z-10 top-0 left-0'></div>
      )}

      {/*Side drawer menu */}
      <div
        className={
          nav
            ? 'w-[300px] h-screen bg-white fixed duration-300 z-10 top-0 left-0'
            : 'w-[300px] h-screen bg-white fixed duration-300 z-10 top-0 left-[-100%]'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={30}
          className='top-4 right-4 absolute cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className=' flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' />
              Orders
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' />
              Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <FaWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4' />
              Help
            </li>
            <li className='text-xl py-4 flex'>
              <AiFillTag size={25} className='mr-4' />
              Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <BsFillSaveFill size={25} className='mr-4' />
              Best Ones
            </li>
            <li className='text-xl py-4 flex'>
              <FaUserFriends size={25} className='mr-4' />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
