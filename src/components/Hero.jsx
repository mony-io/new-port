import React from "react";
import {AiFillGithub, AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin} from "react-icons/ai"

const Hero = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 my-28 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <h2 className="text-[#64ffda] font-bold mb-6 tracking-widest">
          Hi, my name is
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.09px]">
          Sarakmony Ry.
        </h1>
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold mt-2 text-[#8892b0]">
          I build things for the web.
        </h3>
        <p className="mt-6 text-lg w-full md:w-[90%] lg:w-[70%] text-[#8892b0]">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at<span className="text-[#64ffda]"> Upstatement.</span>
        </p>
        <button className="text-[#64ffda] border text-sm border-[#64ffda] p-4 px-12 rounded mt-12 sm:mt-16">
          Contact Me !
        </button>
      </div>
      <div className="hidden md:flex left-6 fixed bottom-0">
        <div className="flex flex-col items-center">
        <AiFillGithub size={24} className="mt-6 hover:text-[#64ffda] hover:-translate-y-2 cursor-pointer duration-300 ease-in-out"/>
        <AiOutlineInstagram size={24} className="mt-6 hover:text-[#64ffda] hover:-translate-y-2 cursor-pointer duration-300 ease-in-out"/>
        <AiOutlineTwitter size={24} className="mt-6 hover:text-[#64ffda] hover:-translate-y-2 cursor-pointer duration-300 ease-in-out"/>
        <AiFillLinkedin size={24} className="mt-6 hover:text-[#64ffda] hover:-translate-y-2 cursor-pointer duration-300 ease-in-out"/>
        <div className="w-[1px] h-[200px] bg-slate-300 mt-6"></div>
        </div>
      </div>
      <div className="hidden md:flex right-6 fixed bottom-0">
        <div className="flex flex-col items-center">
        <div className="mt-12 rotate-90 w-[39px] text-sm hover:text-[#64ffda] hover:-translate-y-2 cursor-pointer duration-300 ease-in-out">rysarakmony6101@gmail.com</div>
        <div className="w-[1px] h-[200px] bg-slate-300 mt-[12rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
