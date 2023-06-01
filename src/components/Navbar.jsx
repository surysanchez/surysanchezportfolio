import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaMailchimp} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className=" navbar fixed w-full h-[80px] flex justify-between items-center px-4 bg-[url('./assets/waves.webp')] text-black-300" style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
       
        <div className='pt-5 pr-5' > 
            <img src={Logo} alt=""  style={{width: '100px'}} />
        </div>
         {/* menu */}
      
            <ul className='hidden md:flex'>
                <li>Main</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
      
        {/* hamburguer */}
     <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : < FaTimes/>}
     </div>


     {/* mobile menu */}
     {/* <ul className='absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-cyan-500 to-pink-500 '>  bg-[#EABE7C] */}
     <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-cyan-500 to-pink-500 flex flex-col justify-center items-center' } > 
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Contact</li>
     </ul>

     {/* social icons */}
     <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-white'>
                <a  className='flex justify-between items-center w-full text-300' href="/">Linkedin  <FaLinkedin  size={30}/> </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] text-white'>
                <a  className='flex justify-between items-center w-full text-300' href="/">Github  <FaGithub  size={30}/> </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1B998B] text-white'>
                <a  className='flex justify-between items-center w-full text-300' href="/">Email  <HiOutlineMail size={30}/> </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F2C14E] text-white'>
                <a  className='flex justify-between items-center w-full text-300' href="/">Resume  <BsFillPersonLinesFill  size={30}/> </a>
            </li>
            
        </ul>
     </div>

    </div>
  )
}
