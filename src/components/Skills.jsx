// import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import React from "../assets/react.png";
import Python from "../assets/python.png";
import NodeJS from "../assets/nodejs.png";
import APIs from "../assets/api.png";
import AWS from "../assets/aws.png";
import Express from "../assets/express.png";
import MongoDB from "../assets/mongodb.png";
import Django from "../assets/django.png";
import PostreSQL from "../assets/postresql.png";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen  mb-24 md:pt-24 lg:pt-24">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl inline border-b-4 border-cyan-700 py-1 font-semibold font-mono lg:pt-10 ">
            Skillset
          </p>
          <p className="py-4">
            // Technologies and tools 
          </p>
        </div>
        {/* Icons's Container */}
        <div className="w-full grid  grid-cols-4 sm:grid-cols-4 gap-4 text-center py-6">
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={HTML} alt="HTML icon" />
            <p className="mb-[4]">HTML</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={CSS} alt="CSS icon" />
            <p className="mb-[4]">CSS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto "
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="mb-[4]">JavaScript</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={React} alt="React icon" />
            <p className="mb-[4]">React</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={Python} alt="Python icon" />
            <p className="mb-[4]">Python</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={NodeJS} alt="NodeJS icon" />
            <p className="mb-[4]">NodeJS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={APIs} alt="APIs icon" />
            <p className="mb-[4]">APIs</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={AWS} alt="AWS icon" />
            <p className="mb-[4]">AWS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto mt-6" src={Express} alt="Express icon" />
            <p className=" mt-16">Express</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto mt-2" src={MongoDB} alt="MongoDB icon" />
            <p className="mb-[6] mt-14">MongoDB</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto sm:mt-4" src={Django} alt="Django icon" />
            <p className="mb-[8] mt-6">Django</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto "
              src={PostreSQL}
              alt="PostreSQL icon"
            />
            <p className=" mt-6">PostreSQL</p>
          </div>
        </div>
        <p className="flex justify-center align-center">And many more ...</p>
      </div>
    </div>
  );
}
