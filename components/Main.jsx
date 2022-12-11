import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm font-bold tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, We are <span className='text-[#150fbcc7]'>ES Group,</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Solution to Everything.</h1>
          <p className='py-4 text-gray-600 font-bold sm:max-w-[70%] m-auto'>
          We are Focused on Creating Amazing <span className='text-[#150fbcc7]'>Commertials, Documentries and streaming Options.</span>
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link legacyBehavior
              href='https://www.facebook.com/esproductionz'
            >
            <a target='_blank' rel='noopener noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFacebook />
              </div>
              </a>
              
            </Link>
            <Link legacyBehavior
              href='https://www.instagram.com/esproductionz/'
            >
              <a target='_blank' rel='noopener noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsInstagram />
              </div>
              </a>
            </Link>
            <Link legacyBehavior href='mailto:info@esproductionz.com'>
              <a target='_blank' rel='noopener noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              </a>
            </Link>
            <Link legacyBehavior href="https://m.youtube.com/channel/UCVI-AxU8dl7RuYn2_qERh8Q">
              <a target='_blank' rel='noopener noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsYoutube />
              </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
