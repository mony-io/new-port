import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import profile from '../assets/pf.jpg';

const About = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <h1 className="text-xl font-semibold">
          <span className="text-[#64ffda] font-normal">01. </span>About Me
        </h1>
      </div>
      <div className="col-span-4 md:col-span-2 mx-9 mr-9 sm:ml-16 md:ml-24 lg:ml-28 xl:ml-64 2xl:ml-80 text-[#8892b0]">
        <div className="pt-9">
          <p className="text-base">
            Hello! My name is Sarakmony and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I decided to try my first web page with HTML & CSS!
          </p>
          <p className="mt-3 text-base">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p className="mt-3 text-base">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p className="mt-3 text-base">
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>
        <div className="flex mt-3">
          <div className="flex flex-col justify-between w-1/2">
            <div className="flex items-center my-2">
              <BiRightArrow size={12} className="text-[#64ffda] mr-3" />
              <span className="font-thin text-sm">Javascript (ES6+)</span>
            </div>
            <div className="flex items-center my-2">
              <BiRightArrow size={12} className="text-[#64ffda] mr-3" />
              <span className="font-thin text-sm">ReactJs</span>
            </div>
            <div className="flex items-center my-2">
              <BiRightArrow size={12} className="text-[#64ffda] mr-3" />
              <span className="font-thin text-sm">NodejJs</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center my-2">
              <BiRightArrow size={12} className="text-[#64ffda] mr-3" />
              <span className="font-thin text-sm">NextJs</span>
            </div>
            <div className="flex items-center my-2">
              <BiRightArrow size={12} className="text-[#64ffda] mr-3" />
              <span className="font-thin text-sm">MongoDB</span>
            </div>
            <div className="flex items-center my-2">
              <BiRightArrow size={12} className="text-[#64ffda] mr-3" />
              <span className="font-thin text-sm">TailwindCss</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 mr-9 md:mr-24 lg:mr-28 xl:mr-64 2xl:mr-80 pt-9">
        <div className="mx-auto w-[350px] h-[400px] md:mx-0 lg:mx-9 2xl:mx-12 rounded flex items-start justify-center">
          <img src={profile} alt="pf" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
