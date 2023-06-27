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
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-12  mb-24 ">
          <div className="sm:text-right text-3xl font-semibold text-[#605022]">
            <p className=" md:mt-26 justify-center border-r-4 border-4 border-[#F2C14E] border-spacing-2 py-6 px-6 lg:p-12">
              {" "}
              Hi. Please call me Sury , nice to meet you. <br /> Glad you are
              here!{" "}
            </p>
            <br />
            <img
              className="rounded-md sm:text-center flex justify-start align-center ml-24 grid-cols-1 mr-8 p-8 sm:w-60% sm:pl-2 sm:ml-12"
              src={Pic}
              style={{ width: "84%", height: "60%" }}
              alt=""
            />
          </div>
          <div>
            {/* <ShowMore
              maxHeight={200}
              className="sm:text-sm font-bold md:text-xl text-[#705022]"
            > */}
            <p className="sm:text-sm font-bold md:text-[17px]  lg:text-lg">
              I’m based in South Florida. I am a curious and creative person who
              likes to create innovative solutions using technology. I started
              teaching myself the basics of programming in 2022 using Udemy and
              FreeCodeCamp. And this year, I enrolled in and completed an
              intensive 3-month immersive Software Engineering Program at
              General Assembly. In that program, I learned full-stack
              development and built several functional projects individually and
              colaborating as part of a group. I love to learn and improve my
              skills continuously to keep up-to-date with evolving technology.{" "}
              <br /> <br />
              Until recently, I worked in real estate as a sales associate. My
              approach has always been to provide high-quality services by
              understanding my clients’ needs and finding properties based on
              their goals and timeline. But, I noticed that many clients found
              selling and buying properties using technology more convenient.
              This observation sparked my passion for software development and
              my journey toward contributing to making people’s lives more
              pleasant.
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
