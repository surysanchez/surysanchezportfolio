import React from "react";
import ShowMore from "react-show-more-button";

export default function About() {
  return (
    <div name="about" className="w-full md:h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full  md:pb-24">
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
          </div>
          <div>
            {/* <ShowMore
              maxHeight={200}
              className="sm:text-sm font-bold md:text-xl text-[#705022]"
            > */}
            <p className="sm:text-sm font-bold md:text-[17px] text-[#705022] lg:text-lg">
              I'm based on Miami , FL. With a backgound in real estate for the
              past two years , awarded me with great communication skills help
              me better understand people's needs and problem-solving mindset as
              part of my work . Besides staying up to date with latest
              technologies and applications to better assist my clients honed me
              a vast knowledge . While I enjoyed my past career , technolgy
              stood to win , many clients are founding more convenient to sell
              and buy properties online . <br /> <br /> Having a curious and
              creative nature for finding innovating solutions to keep helping
              my society , I found my true passion for developing. I started
              teaching myself the basics of programing . Consequently I
              completed an Inmersive Software Engineer Program at General
              Assembly , where I acquired numerous skills , built several
              functional projects and obtained a self growth mindset to work as
              a developer . I have prodly become a full stack software enginner
              and I'm continuosly learning and evolving my skills .
            </p>
            {/* </ShowMore> */}
          </div>
        </div>
      </div>
    </div>
  );
}
