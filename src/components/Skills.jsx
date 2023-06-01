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

// bg-[url('./assets/pol.webp')]
export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#FC4BBB8]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl inline border-b-4 border-[#605022] py-1 font-semibold font-mono">
            Skillset
          </p>
          <p className="py-4">
            Technologies I use to develop advantegeous applications and
            features.{" "}
          </p>
        </div>
        {/* Icons's Container */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-6">
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto " src={HTML} alt="HTML icon" />
            <p className="my-[-2]">HTML</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-[-2]">CSS</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-[-2]">JavaScript</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={React} alt="React icon" />
            <p className="my-[-2]">React</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Python} alt="Python icon" />
            <p className="my-[-2]">Python</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={NodeJS} alt="NodeJS icon" />
            <p className="my-[-2]">NodeJS</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={APIs} alt="APIs icon" />
            <p className="my-[-2]">APIs</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={AWS} alt="AWS icon" />
            <p className="my-[-2]">AWS</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Express} alt="Express icon" />
            <p className="my-[-2]">Express</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={MongoDB} alt="MongoDB icon" />
            <p className="my-[-2]">MongoDB</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src={Django} alt="Django icon" />
            <p className="my-[-2]">Django</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <img
              className="w-40 mx-auto "
              src={PostreSQL}
              alt="PostreSQL icon"
            />
            <p className="my-[-2]">PostreSQL</p>
          </div>
          <p className="justify-center">And many more ...</p>
        </div>
      </div>
    </div>
  );
}
