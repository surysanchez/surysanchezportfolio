import React from "react";
import ShowMore from "react-show-more-button";
import Pic from "../assets/profile.png";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function About() {
  return (
    <div name="about" className="w-full md:h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full lg:pt-10 sm:mt-[-14] xs:pt-[-20] md:pt-12">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-3xl inline border-b-4 sm:leading-9 font-semibold font-mono border-cyan-700 py-1 ">
              My Journey
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-12  mb-24 ">
          <div className="sm:text-right text-3xl font-semibold text-[#605022]">
            <p className=" md:mt-26 justify-center border-r-4 border-4 border-[#F2C14E] border-spacing-2 py-6 px-6 lg:p-1">
              {" "}
              Hi. I'm Sury , nice to meet you. <br /> Glad you are here!{" "}
            </p>
            <br />
            <img
              className=" bg-gradient-to-r from-black to-gray-500 fade-in rounded-s-full  rounded-t-full  sm:text-center flex justify-start align-center ml-8 grid-cols-1 mr-8 p-8 sm:w-60% sm:pl-2 "
              src={Pic}
              style={{ width: "84%", height: "65%" }}
              alt=""
            />
          </div>
          <div>
            {/* <ShowMore
              maxHeight={200}
              className="sm:text-sm font-bold md:text-xl text-[#705022]"
            > */}
            <p className="sm:text-sm font-bold md:text-[17px] tracking-wide lg:text-lg">
              I'm a curious and creative software developer based in South
              Florida. My coding journey began in 2022 with Udemy and
              FreeCodeCamp, culminating in the completion of a rigorous 3-month
              Software Engineering Program at General Assembly in early 2023.
              With a background in real estate sales and customer service, I
              discovered my passion for software development by focusing on
              understanding clients' needs and creating modern applications to
              simplify daily routines. <br />
              <br />
              My unique journey seamlessly blends
              customer service expertise with coding skills, driven by a
              commitment to continuous improvement. Beyond the code, I bring
              adaptability, strategic thinking, and fast learning to the table.
              Excited about the boundless possibilities that technology offers,
              I am dedicated to leveraging it to enhance the human experience.
              Thank you for joining me on this journey. Let's connect and
              explore how we can make a positive impact together!
            </p>
            <button className="text-xl group font-mono font-bold text-black bg-gradient-to-r from-cyan-500 to-pink-500 max-w-[700px] border-4 border-cyan-600 px-4 py-3 my-3 flex items-center hover:bg-[#F2C14E] hover:border-[#F2C14E] ">
            <Link to="work" smooth={true} duration={500}>
              View my Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>{" "}
          </button>
            {/* </ShowMore> */}
          </div>
        </div>
      </div>
    </div>
  );
}
