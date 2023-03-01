import React from 'react';
import wall from '../assets/wall.jpg';
import { ImShare } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 mt-28 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <h1 className="text-xl font-semibold">
          <span className="text-[#64ffda] font-normal">03. </span> Some thing
          I've built
        </h1>
      </div>
      <div className="col-span-4 mt-16 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <div className="grid grid-cols-4 gap-4 relative w-full">
          <div className="col-span-4 md:col-span-3">
            <img
              src={wall}
              alt="wall"
              className="h-[400px] md:h-[300px] lg:h-[400px] md:w-[80%] w-full lg:w-3/4"
            />
          </div>
          <div className="col-span-4 absolute top-3 md:-top-3 px-6 md:px-0 md:text-right text-left md:right-0">
            <h3 className="text-[#64ffda] text-sm">Featured Project</h3>
            <h1 className="text-[#33fccd] text-xl font-semibold">Homophobic</h1>
          </div>
          <div className="col-span-4 w-2/3 md:w-[70%] absolute top-16 md:right-0 md:bg-[#64ffdb44] md:text-right lg:w-1/2">
            <p className="p-6">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>
          <div className="col-span-4 absolute bottom-6 sm:bottom-12 md:-bottom-6 lg:bottom-20 md:right-0">
            <p className="p-6">VS Code Sublime Text Atom iTerm2 Hyper</p>
            <div className="mx-6 flex md:justify-end">
              <AiFillGithub className="mr-3 text-xl" />
              <ImShare className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 mt-16 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <div className="grid grid-cols-4 gap-4 relative w-full">
          <div className="col-span-4 flex justify-end">
            <img
              src={wall}
              alt="wall"
              className="h-[400px] md:h-[300px] lg:h-[400px] md:w-[60%] w-full lg:w-[60%] xl:w-[60%] 2xl:w-[55%]"
            />
          </div>
          <div className="col-span-4 absolute top-3 md:-top-3 px-6 md:px-0 md:text-left text-right md:left-0">
            <h3 className="text-[#64ffda] text-sm">Featured Project</h3>
            <h1 className="text-[#33fccd] text-xl font-semibold">Homophobic</h1>
          </div>
          <div className="col-span-4 w-2/3 md:w-[70%] absolute top-16 md:left-0 md:bg-[#64ffdb44] md:text-left lg:w-1/2">
            <p className="p-6">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>
          <div className="col-span-4 absolute bottom-6 sm:bottom-12 md:-bottom-6 lg:bottom-20 md:left-0">
            <p className="p-6">VS Code Sublime Text Atom iTerm2 Hyper</p>
            <div className="mx-6 flex md:justify-start">
              <AiFillGithub className="mr-3 text-xl" />
              <ImShare className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 mt-16 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <div className="grid grid-cols-4 gap-4 relative w-full">
          <div className="col-span-4 md:col-span-3">
            <img
              src={wall}
              alt="wall"
              className="h-[400px] md:h-[300px] lg:h-[400px] md:w-[80%] w-full lg:w-3/4"
            />
          </div>
          <div className="col-span-4 absolute top-3 md:-top-3 px-6 md:px-0 md:text-right text-left md:right-0">
            <h3 className="text-[#64ffda] text-sm">Featured Project</h3>
            <h1 className="text-[#33fccd] text-xl font-semibold">Homophobic</h1>
          </div>
          <div className="col-span-4 w-2/3 md:w-[70%] absolute top-16 md:right-0 md:bg-[#64ffdb44] md:text-right lg:w-1/2">
            <p className="p-6">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>
          <div className="col-span-4 absolute bottom-6 sm:bottom-12 md:-bottom-6 lg:bottom-20 md:right-0">
            <p className="p-6">VS Code Sublime Text Atom iTerm2 Hyper</p>
            <div className="mx-6 flex md:justify-end">
              <AiFillGithub className="mr-3 text-xl" />
              <ImShare className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
