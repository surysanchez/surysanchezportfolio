import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import Resume  from '../assets/SurelyCabrera-Front-EndSoftwareEngineer.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  
    <div className=' fixed w-full h-[80px] mx-auto justify-end flex items-center px-4 text-white'>
 <nav className={`navbar ${scrollY > 0 ? 'hidden' : ''}`}>
      <div bg-gradient-to-l from-black to-gray-600>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      </div>
      </nav>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-l from-black to-gray-600 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-[#F2C14E] rounded-md'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#F2C14E] rounded-md'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#F2C14E] rounded-md'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#F2C14E] rounded-md'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#F2C14E] rounded-md'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href="    https://www.linkedin.com/in/surycabrera/    "
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href="https://github.com/surysanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href="mailto:surelycabrera10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F2C14E] '>
            <a
              className='flex justify-between items-center w-full text-white'
              
              href={Resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
 
  );
};

export default Navbar;