import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 my-52 mx-10 sm:mx-16 md:mx-22 lg:mx-44 2xl:mx-80">
        <h2 className="text-[#64ffda] font-bold mb-6 tracking-widest">
          Hi, my name is
        </h2>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.09px]">
          Sarakmony Ry.
        </h1>
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-[#8892b0]">
          I build things for the web.
        </h3>
        <p className="mt-6 text-md sm:text-lg w-full lg:w-[60%] text-[#8892b0]">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at
          <span className="text-[#64ffda] pl-[4px]">Upstatement.</span>
        </p>
        <button className="text-[#64ffda] border text-sm border-[#64ffda] p-4 px-12 rounded mt-12 sm:mt-16">
          Contact Me !
        </button>
      </div>
    </div>
  );
};

export default Hero;
