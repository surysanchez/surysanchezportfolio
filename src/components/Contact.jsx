import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full md:h-screen flex justify-center items-center py-2  bg-[#F2C14E] md:mt-24 md:pt-24 md:mb-2"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <form
        className="flex ml-4 flex-col max-w-[600px] h-full w-full mb-4 "
        action="https://getform.io/f/1118c7a9-61f6-4a86-82e7-1c2896d38209"
        method="POST"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="pb-0 mt-0 ">
          <p className="text-3xl inline border-b-4 font-semibold font-mono border-cyan-700 py-1 mt-6 ">
            Contact
          </p>
          <p className="py-4 ">Send me a message or direct email </p>
        </div>
        <input
          className=" my-4 py-1 p-2 border-2 rounded-md border-[#605022]"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="my-6 p-2 rounded-md border-2 border-[#605022]"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="my-4 p-8  border-2 border-[#605022] rounded-md"
          type="text"
          rows="10"
          name="message"
          required
          placeholder="Message"
        />
        {/* <div pt-8 text-center> */}
        <button
          className="border-4 border-[#1B998B] bg-gradient-to-r from-cyan-500 to-pink-500 hover:bg-[#1B998B] hover:border-white px-4 py-3 my-8 mx-auto md:flex items-center mt-2 "
          type="submit"
          required
        >
          Let's work together!
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}
