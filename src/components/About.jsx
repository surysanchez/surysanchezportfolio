import React from "react";
import ShowMore from "react-show-more-button";
// import Pic from "../assets/pic.JPG";
import Pic from "../assets/profile.png";

export default function About() {
  return (
    <div name="about" className="w-full md:h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full  md:pb-24 lg:mt-24 md:mt-24 md:pt-24 ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-3xl inline border-b-4  font-semibold font-mono border-cyan-700 py-1 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8  mb-24 ">
          <div className="sm:text-right text-3xl font-semibold text-[#605022]">
            <p className=" md:mt-26 justify-center border-r-4  border-4 border-[#F2C14E] border-spacing-2 py-6 px-6">
              {" "}
              Hi. Please call me Sury , nice to meet you. <br /> Glad you are
              here!{" "}
            </p>
            <br />
            <img
              className="rounded-md sm:text-center flex justify-center align-center ml-24 grid-cols-1 mr-8"
              src={Pic}
              style={{ width: "80%", height: "60%" }}
              alt=""
            />
          </div>
          <div>
            {/* <ShowMore
              maxHeight={200}
              className="sm:text-sm font-bold md:text-xl text-[#705022]"
            > */}
            <p className="sm:text-sm font-bold md:text-[17px]  lg:text-lg">
              I'm based in South FL. With a background in real estate for the
              past two years, which contributed to me to possess great
              communication skills, understanding people's needs and having a
              problem-solving mindset has been part of my work. Besides staying
              up to date with the latest software and applications to better
              assist my clients honed a vast knowledge of technology. While I
              enjoyed my past career, technology is a powerful tool, many
              clients are founding it more convenient to sell and buy properties
              online. <br /> <br />
              Having a curious and creative nature for finding innovative
              solutions to keep helping my clients and my colleagues, I found my
              true passion for developing. I started teaching myself the basics
              of programming. Consequently, I completed an Inmersive Software
              Engineer Program at General Assembly, where I acquired numerous
              skills, built several functional projects and obtained a
              self-growth mindset to work as a developer. I have proudly become
              a full-stack software engineer and continue to learnig and
              evolving my knowledge.
            </p>
            <button className="text-lg group font-mono text-[#605022] max-w-[700px] border-4 border-cyan-600 px-4 py-3 my-3 flex items-center hover:bg-[#F2C14E] hover:border-[#F2C14E] ">
              <a
                className="flex justify-between items-center w-full text-300"
                href="https://docs.google.com/document/d/1LAEHZx4JIRnYQn7C4yql3TpQ4ZEpispkong1Vg38gH0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                alt=""
              >
                Resume
              </a>
            </button>
            {/* </ShowMore> */}
          </div>
        </div>
      </div>
    </div>
  );
}
