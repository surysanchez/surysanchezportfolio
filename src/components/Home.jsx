import React, { useState } from "react";
// import color from '../assets/color.jpeg';
import Resume from "../assets/SurelyCabrera-Front-EndSoftwareEngineer.pdf";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer.', "Software Engineer", "Front-End Engineer.", "UX Designer.", "Professional Coder.", "Previous Real Estate Agent", 'Pet Parent'],
    Cursor,
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-l from-black to-gray-600 mb-24 "
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pl-28">
        <h4 className="text-white text-3xl ">Hola! </h4>
        <h2 className="text-5xl text-white  sm:text-4xl font-bold">
          {" "}
          I'm  <span className="text-[#c84cb3]">Surely Cabrera</span>
        </h2>
        <h3 className=" xs:w-full w-1/2 mt-4 text-3xl sm:text-3xl text-white justify-center font-bold rounded-md" >
           a  <span className=" text-[#F2C14E]">{text}</span>
        <Cursor
        cursorBlinking='true'
        cursorStyle=""
        cursorColor="#f2c14e]"
        />

        </h3>
        <div>

        <button className="text-lg group font-mono max-w-[700px] border-4 border-cyan-600 px-4 py-3 my-3 flex items-center hover:bg-[#F2C14E] hover:border-[#F2C14E] hover:text-black">
              <a
                className="flex justify-between items-center w-full text-300 text-white"
                href={Resume}
                download
                target="_blank"
                rel="noopener noreferrer"
                alt=""
              >
                Resume <FaFileDownload />
              </a>
            </button>
          
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-full h-screen " >
<img src={color} alt=""   />  
</div> */
}
