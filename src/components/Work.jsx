import React from "react";
import CardGame from "../assets/game.png";
import TrueFitness from "../assets/truefitness.png";
import MarketUrself from "../assets/marketurself.png";
import SweetTreats from "../assets/sweettreats.png";

export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen md:pt-24 md:mt-24 mb-24 ">
      {/* bg-[#F2C14E] */}
      {/* Container  */}

      <div className="max-w-[1000px] mx-auto p-0 flex flex-col justify-center md:w-full md:h-full">
        <div className="pb-8">
          <p className="text-3xl inline border-b-4 font-bold font-mono border-cyan-700 py-1 ml-4">
            Work
          </p>
          <p className="py-4 ml-4"> // Check out some of my recent work</p>
        </div>

        {/* Card Container  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 my-0 ml-4">
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${TrueFitness})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500 ">
                TRUE FITNESS
              </span>
              <p className="text-sm p-2">
                {" "}
                Created full-stack application utilizing technologies such as
                Node JS and Express forming the backend. Utilized EJS templates
                to render a combination of workouts and healthy recipes as the
                front side interface and allow users to create, read, update,
                and delete operations hitting all RESTful API calls. Employed
                Mongoose database to preserve application data, and Google OAuth
                secured user’s data.
              </p>

              <div className="pt-8 text-center">
                <a
                  href="https://true-fitness-10.herokuapp.com/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/surysanchez/True-Fitness-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 font-mono  text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover effect */}
            </div>
            {/* Card Item */}
          </div>
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${MarketUrself})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500">
                MARKET URSELF
              </span>
              <p className="text-sm p-2">
                Interested in supporting an small busines . Visit our full-stack
                app which allow local sellers to expose their products online to
                all buyers .Implemented Python for user interface, Django, and
                PostgreSQL to connect features and functionality available on
                the app with the front end. Applied Materialize CSS to offer a
                dynamic user experience.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://marketurself.herokuapp.com/wearables"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/surysanchez/market-urself/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 font-mono text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover effect */}
            </div>
            {/* Card Item */}
          </div>
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${CardGame})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500">
                MEMORY MATCHES
              </span>
              <p className="text-sm p-2">
                {" "}
                Building memory muscle .Designed a memory card game using
                standard HTML and CSS displaying the structure and design
                Constructed the logic and performance of the app by applying
                JavaScript. Hosted live on GitHub Pages. .
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://surysanchez.github.io/memory-matches/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/surysanchez/memory-matches"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 font-mono  text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover effect */}
            </div>
            {/* Card Item */}
          </div>
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${SweetTreats})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500">
                SWEET TREATS
              </span>
              <p className="text-sm p-2">
                Inspired about helping grow an small business ,I developed a
                tailored functional MERN-full stack e-commerce website to help
                grow a small business, holds full CRUD functionality, where all
                users can create, read, update, and delete their custom cakes.
              </p>
              <div className="pt-8 text-center">
                We'll be available soon
                {/* <a
                  href="https://sweetcreations.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600  text-lg">
                    Demo
                  </button> */}
                {/* </a> */}
                <a
                  href="https://github.com/surysanchez/sweet-treats-creations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 font-mono  text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover effect */}
            </div>
            {/* Card Item */}
          </div>
          {/* Card Container  */}
        </div>
        {/* End of card */}
      </div>
    </div>
  );
}
