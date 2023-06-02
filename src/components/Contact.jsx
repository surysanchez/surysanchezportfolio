import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full md:h-screen flex justify-center items-center py-4  bg-[#F2C14E] md:mt-24 md:pt-24  "
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        action="https://getform.io/f/1118c7a9-61f6-4a86-82e7-1c2896d38209"
        method="POST"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="pb-8">
          <p className="text-3xl inline border-b-4 font-semibold font-mono border-cyan-700 py-1">
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
        <textarea
          className="my-4 p-2  border-2 border-[#605022] rounded-md"
          type="text"
          rows="6"
          name="message"
          required
          placeholder="Message"
        />
        {/* <div pt-8 text-center> */}
        <button
          className="border-4 border-[#1B998B] bg-gradient-to-r from-cyan-500 to-pink-500 hover:bg-[#1B998B] hover:border-white px-4 py-3 my-8 mx-auto md:flex items-center md:pb-[-10]"
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
