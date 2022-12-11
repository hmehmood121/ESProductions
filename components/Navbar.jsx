import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/assets/navLogo.png'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#0000FF');
  const [linkColor, setLinkColor] = useState('#fff');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-25 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-25 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 mt-1 2xl:px-16'>
        <Link legacyBehavior href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='auto'
              height='80'
              className='cursor-pointer object-contain'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm font-bold uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm font-bold uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm font-bold uppercase hover:border-b'>
              <Link href='/#services'>Services</Link>
            </li>
            <li className='ml-10 text-sm font-bold uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm font-bold uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0000ff] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link legacyBehavior href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='110'
                    height='80'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-white'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] py-4 text-white'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white font-bold'>
                  Home
                </li>
                
              </Link>
              <Link href='/#about'>
                
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white font-bold'>
                  About
                </li>
                
              </Link>
              <Link href='/#services'>
                
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white font-bold'>
                  Services
                </li>
                
              </Link>
              <Link href='/#projects'>
                
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white font-bold'>
                  Projects
                </li>
              
              </Link>
              <Link href='/#contact'>
                
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white font-bold'>
                  Contact
                </li>
              
              </Link>
            </ul>
           
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
