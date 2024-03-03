import React from "react";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div
          class="
          w-full max-w-screen-xl mx-auto p-4 md:py-8 md:justify-center sm:justify-center align-center sm:pl-10"
        >
          <div class=" lg:hidden sm:flex sm:items-center sm:justify-center align-center ">
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500  dark:text-gray-400" >
              <li>
                <a
                  class="mr-4 hover:underline md:mr-6"
                  href="https://www.linkedin.com/in/surycabrera/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} /> Linkedin
                </a>
              </li>
              <li>
                <a
                  class="mr-4 hover:underline md:mr-6"
                  href="https://github.com/surysanchez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} /> Github
                </a>
              </li>
              <li>
                <a
                  class="mr-4 hover:underline md:mr-6"
                  href="mailto:surelysanchez10@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineMail size={30} /> Email
                </a>
              </li>
              {/* <li>
                <a
                  class="mr-4 hover:underline md:mr-6"
                  href="https://docs.google.com/document/d/1LAEHZx4JIRnYQn7C4yql3TpQ4ZEpispkong1Vg38gH0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                >
                  <BsFillPersonLinesFill size={30} /> Resume
                </a>
              </li> */}
              {/* <li>
                <a
                  class="mr-4 hover:underline md:mr-6"
                  // href="./assets/SurelySanchezSoftware Developer-Corriculum.pdf"
                  href={Resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  alt=""
                >
                  <FaDownload size={30} /> Download Resume
                </a>
              </li> */}
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class=" flex justify-evenly align-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <p>
              &copy; 2023| Created by Sury Sanchez using Tailwind and React.
            </p>
          </span>
        </div>
      </footer>
      <div className="flex justify-evenly align-center text-gray-500 p-8 b  ">
        <button className="flex bg-cyan-600 text-white hover:bg-pink-500  ">
          <Link to="home" smooth={true} duration={500}>
            <BsArrowUp size={30} />{" "}
          </Link>
        </button>
      </div>
    </>
  );
}
