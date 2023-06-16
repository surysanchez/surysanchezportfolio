import React from "react";
import ShowMore from "react-show-more-button";
// import Pic from "../assets/pic.JPG";
import Pic from "../assets/mypic.jpg";

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
            <br />
            <img
              className="rounded-md flex justify-center align-center ml-24"
              style={{ width: "210px", height: "270px" }}
              src={Pic}
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
              a full-stack software
            </p>
            {/* </ShowMore> */}
          </div>
        </div>
      </div>
    </div>
  );
}
