import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaMailchimp,
  FaDownload,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Resume from "../assets/SurelySanchezSoftware Developer-Corriculum.pdf";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className=" navbar fixed w-full h-[80px] flex justify-between items-center px-4 bg-[url('./assets/waves.webp')] text-black-300  border-2 rounded-md"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="pt-5 pr-5">
        <img src={Logo} alt="" style={{ width: "100px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          {" "}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="border-4 rounded-md  border-transparent hover:border-[white] hover:text-pink-600 py-1 text-xl">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      {/* <ul className='absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-cyan-500 to-pink-500 '>  bg-[#EABE7C] */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-cyan-500 to-pink-500 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-white">
            <a
              className="flex justify-between items-center w-full text-300"
              href="https://www.linkedin.com/in/sury-sanchez-software-engineer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] text-white">
            <a
              className="flex justify-between items-center w-full text-300"
              href="https://github.com/surysanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1B998B] text-white">
            <a
              className="flex justify-between items-center w-full text-300"
              href="mailto:surelysanchez10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500 text-white">
            <a
              className="flex justify-between items-center w-full text-300"
              href="https://docs.google.com/document/d/1XXkmsW0nhj8ta_VvYLvV7VspRWIQdrvGIxUJKRmC1Uw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-cyan-500 to-pink-500 text-white">
            <a
              className="flex justify-between items-center w-full text-300"
              // href="./assets/SurelySanchezSoftware Developer-Corriculum.pdf"
              href={Resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            >
              Download Resume <FaDownload size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
