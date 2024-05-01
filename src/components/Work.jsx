import React from "react";
import CardGame from "../assets/game.png";
import Adriancarpenter from "../assets/adriancarpenter.png";
import MarketUrself from "../assets/marketurself.png";
import SweetTreats from "../assets/sweettreats.png";
import Tastymaria from "../assets/tastymaria.png";

export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen md:pt-24 md:mt-24 mb-24 ">
      {/* bg-[#F2C14E] */}
      {/* Container  */}

      <div className="max-w-[1000px] mx-auto p-0 flex flex-col justify-center md:w-full md:h-full">
        <div className="pb-8">
          <p className="text-3xl inline border-b-4 font-bold font-mono border-cyan-700 py-1 ml-4">
            Personal Projects
          </p>
          <p className="py-4 ml-4"> // Check out some of my recent work</p>
        </div>

        {/* Card Container  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 my-0 ml-4">
          {/* Card Item */}
          <div
            style={{ backgroundImage: `url(${Tastymaria})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500 ">
                Tasty Maria
              </span>
              <p className="text-sm p-2">
                {" "}
                Built a functional responsive website for an small food
                business. Utilized React framework to ensure a proper rendering
                of the user interface components. Concurrently applied React
                Boostrap and CSS to style the website. The app is live hosted on
                github pages.
              </p>

              <div className="pt-8 text-center">
                <a
                  href=" https://tastymaria.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/surysanchez/tastymaria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 font-mono  text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Hover effect */}

         

          <div
            style={{ backgroundImage: `url(${Adriancarpenter})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 pt-14 group-hover:opacity-100">
              <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500">
                AdrianCarpenter
              </span>
              <p className="text-sm p-4">
                {" "}
                Crafted a dynamic and visually appealing website from the ground
                up for a small business using React,CSS, and Bootstrap.
                Leveraging the latest technologies, I ensured seamless
                interactivity and responsiveness, providing an engaging user
                experience. The project showcases a modern design, incorporating
                industry best practices for optimal performance and
                functionality. Deployment and custom domain utilizing
                SquareSpace.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://surysanchez.github.io/Safari-Match/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/surysanchez/Safari-Match"
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
            style={{ backgroundImage: `url(${CardGame})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500">
                Safari-Match
              </span>
              <p className="text-sm p-2">
                {" "}
                Designed my first browser-based game. This app is a memory card
                game using standard HTML and CSS displaying the structure and
                design Constructed the logic and performance of the app by
                applying JavaScript. Hosted live on GitHub Pages, while
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://surysanchez.github.io/Safari-Match/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/surysanchez/Safari-Match"
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
                Launched a tailored functional e-commerce website, implemented
                React, HTML and CSS to assemble web page structure and design.
                Currently working on responsive mobile design and enhance User
                Experience.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://sweettreatscreations-8a6d3e0f2625.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600  text-lg">
                    Demo
                  </button> */}
                </a>
                <a
                  href=""
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

 {/* Card Item */}
          {/* <div
            style={{ backgroundImage: `url(${TrueFitness})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            // <div className="opacity-0 group-hover:opacity-100">
            // <span className="text-2xl text-[#605022] tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500 ">
            //   TRUE FITNESS
            // </span>
            // <p className="text-sm p-2">
            //   {" "}
            //   Created full-stack application utilizing technologies such as Node
            //   JS and Express forming the backend. Utilized EJS templates to
            //   render a combination of workouts and healthy recipes as the front
            //   side interface and allow users to create, read, update, and delete
            //   operations hitting all RESTful API calls. Employed Mongoose
            //   database to preserve application data, and Google OAuth secured
            //   user’s data.
            // </p>

            // <div className="pt-8 text-center">
            //   <a
            //     href="https://true-fitness-10.herokuapp.com/ "
            //     target="_blank"
            //     rel="noopener noreferrer"
            //   >
            //     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 text-lg">
            //       Demo
            //     </button>
            //   </a>
            //   <a
            //     href="https://github.com/surysanchez/True-Fitness-App"
            //     target="_blank"
            //     rel="noopener noreferrer"
            //   >
            //     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-cyan-600 font-mono  text-lg">
            //       Code
            //     </button>
            //   </a>
            // </div>
            {/* Hover effect */}
          // </div>
          {/* </div>  */}