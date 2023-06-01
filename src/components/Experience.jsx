import React from "react";
import CardGame from "../assets/game.png";
import SweetTreats from "../assets/sweettreats.png";
import TrueFitness from "../assets/truefitness.png";
import MarketUrself from "../assets/marketurself.png";

export default function Experience() {
  return (
    <div name="experience" className="w-full md:h-screen bg-[#F2C14E]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl inline border-b-4  font-semibold font-mono border-cyan-700 py-1 ">
            Work
          </p>
          <p className="py-6"> // Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card Container */}
          <div className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
