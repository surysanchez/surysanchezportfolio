import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import color from '../assets/color.jpeg';
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[url('./assets/pol.webp')] mb-24 "
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h4 className="text-cyan-700 text-2xl ">Hola!</h4>
        <h2 className="text-4xl text-[#605022] sm:text-5xl font-bold ">
          {" "}
          I'm Surely Sanchez
        </h2>
        <h3 className=" text-2xl sm:text-4xl text-[#F2C14E] justify-center font-bold bg-gradient-to-r from-cyan-500 to-pink-500 w-2/3 rounded-md">
          A Visionary Full Stack Developer.
        </h3>
        <div>
          <button className="text-lg group font-mono text-[#605022] max-w-[700px] border-4 border-cyan-600 px-4 py-3 my-3 flex items-center hover:bg-[#F2C14E] hover:border-[#F2C14E] ">
            <Link to="work" smooth={true} duration={500}>
              View my Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>{" "}
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
