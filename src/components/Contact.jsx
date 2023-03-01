import React from 'react';
import {AiFillGithub} from "react-icons/ai"

const Contact = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-48 mb-12">
      <div className="col-span-4 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <h1 className="text-md md:text-xl font-semibold text-center mb-6">
          <span className="text-[#64ffda] font-normal">04. </span>What's Next ?
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Get In Touch
        </h1>
        <p className="text-center px-10 2xl:w-2/3 mx-auto mt-12 text-lg">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="flex justify-center mt-16">
          <button className="border border-[#64ffda] p-4 px-9 rounded-sm">
            Say Hello
          </button>
        </div>
        <div className='sm:hidden flex mt-36 justify-center'>
          <AiFillGithub size={23} className="mr-6" />
          <AiFillGithub size={23} className="mr-6" />
          <AiFillGithub size={23} className="mr-6" />
          <AiFillGithub size={23} className="mr-6" />
          <AiFillGithub size={23} className="mr-6" />
          <AiFillGithub size={23} className="" />
        </div>
        <div className='flex justify-center text-sm mt-6 sm:mt-36'>
          <p>Designed & Built by Sarakmony Ry</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
