import React from "react";
import { Link } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex justify-evenly align-center text-gray-500 p-8 b  ">
      <p>
        Copyright &copy; 2023| Created by Sury Sanchez using Tailwind and React
        .
      </p>

      <button className="flex bg-cyan-600 text-white hover:bg-pink-500 ">
        <Link to="home" smooth={true} duration={500}>
          <BsArrowUp size={30} />{" "}
        </Link>
      </button>
    </div>
  );
}
