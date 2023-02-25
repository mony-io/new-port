import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  // sticky nav
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass(
            "fixed top-0 left-0 z-50 backdrop-blur-md w-full shadow-lg h-[70px]"
          )
        : setStickyClass("relative");
    }
  };
  return (
    <>
      <div
        className={`justify-between px-12 h-[80px] items-center ${stickyClass} hidden lg:flex animate-fade`}
      >
        <img src={logo} alt="" className="w-[60px] h-[60px] p-2" />
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="px-5 text-sm hover:text-[#64ffda] duration-300 ease-in-out"
          >
            <span className="text-sm pr-3 text-[#64ffda]">01.</span>About
          </a>
          <a
            href="#"
            className="px-5 text-sm hover:text-[#64ffda] duration-300 ease-in-out"
          >
            <span className="text-sm pr-3 text-[#64ffda]">02.</span>Skill
          </a>
          <a
            href="#"
            className="px-5 text-sm hover:text-[#64ffda] duration-300 ease-in-out"
          >
            <span className="text-sm pr-3 text-[#64ffda]">03.</span>Project
          </a>
          <a
            href="#"
            className="px-5 text-sm hover:text-[#64ffda] duration-300 ease-in-out"
          >
            <span className="text-sm pr-3 text-[#64ffda]">04.</span>Contact
          </a>
          <button className="border border-[#64ffda] text-[#64ffda] text-sm font-semibold rounded px-6 p-2 ml-6">
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
