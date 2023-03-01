import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';

const Skills = () => {
  const [showContent, setShowContent] = useState(1);

  const handleClick = (e) => {
    setShowContent(e);
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-[12rem] md:mt-0 md:my-10 md:mx-10 lg:mx-20 ">
      <div className="col-span-4 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80">
        <h1 className="text-xl font-semibold">
          <span className="text-[#64ffda] font-normal">03. </span> Where I've
          Work
        </h1>
      </div>
      <div className="col-span-4 mx-9 sm:mx-16 md:mx-24 lg:mx-28 xl:mx-64 2xl:mx-80 flex flex-col sm:flex-row mt-12">
        <div className="h-auto bg-gray-500 w-[2px] hidden sm:block"></div>
        <div className="mr-9">
          <ul className="cursor-pointer text-left text-sm flex flex-row sm:flex-col">
            <li
              onClick={() => handleClick(1)}
              className={
                showContent === 1
                  ? 'text-[#64ffda] bg-[#64ffdb10] duration-300 p-3'
                  : 'p-3'
              }>
              Upstatement
            </li>
            <li
              onClick={() => handleClick(2)}
              className={
                showContent === 2
                  ? 'text-[#64ffda] bg-[#64ffdb10] duration-300 p-3'
                  : 'p-3'
              }>
              Scout
            </li>
            <li
              onClick={() => handleClick(3)}
              className={
                showContent === 3
                  ? 'text-[#64ffda] bg-[#64ffdb10] duration-300 p-3'
                  : 'p-3'
              }>
              Apple
            </li>
            <li
              onClick={() => handleClick(4)}
              className={
                showContent === 4
                  ? 'text-[#64ffda] bg-[#64ffdb10] duration-300 p-3'
                  : 'p-3'
              }>
              Scout
            </li>
            <li
              onClick={() => handleClick(5)}
              className={
                showContent === 5
                  ? 'text-[#64ffda] bg-[#64ffdb10] duration-300 p-3'
                  : 'p-3'
              }>
              Starry
            </li>
          </ul>
        </div>
        <div className="my-6 sm:my-0">
          {showContent === 1 && (
            <div>
              <h3>
                Engineer <span className="text-[#64ffda]">@Upstatement</span>
              </h3>
              <p className="text-sm">July - December 2017</p>
              <div className="mt-6">
                <div className="flex">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Developed and shipped highly interactive web applications
                    for Apple Music using Ember.js
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Built and shipped the Apple Music Extension within Facebook
                    Messenger leveraging third-party and internal APIs
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Architected and implemented the front-end of Apple Music's
                    embeddable web player widget, which lets users log in and
                    listen to full songs in the browser
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Contributed extensively to MusicKit.js, a JavaScript
                    framework that allows developers to add an Apple Music
                    player to their web apps
                  </span>
                </div>
              </div>
            </div>
          )}
          {showContent === 2 && (
            <div>
              <h3>
                Studio Developer
                <span className="text-[#64ffda]"> @Scout</span>
              </h3>
              <p className="text-sm">January - April 2018</p>
              <div className="mt-6">
                <div className="flex">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Developed and shipped highly interactive web applications
                    for Apple Music using Ember.js
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Built and shipped the Apple Music Extension within Facebook
                    Messenger leveraging third-party and internal APIs
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Architected and implemented the front-end of Apple Music's
                    embeddable web player widget, which lets users log in and
                    listen to full songs in the browser
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Contributed extensively to MusicKit.js, a JavaScript
                    framework that allows developers to add an Apple Music
                    player to their web apps
                  </span>
                </div>
              </div>
            </div>
          )}
          {showContent === 3 && (
            <div>
              <h3>
                UI Engineer Co-op
                <span className="text-[#64ffda]"> @Apple</span>
              </h3>
              <p className="text-sm">July - December 2017</p>
              <div className="mt-6">
                <div className="flex">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Developed and shipped highly interactive web applications
                    for Apple Music using Ember.js
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Built and shipped the Apple Music Extension within Facebook
                    Messenger leveraging third-party and internal APIs
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Architected and implemented the front-end of Apple Music's
                    embeddable web player widget, which lets users log in and
                    listen to full songs in the browser
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Contributed extensively to MusicKit.js, a JavaScript
                    framework that allows developers to add an Apple Music
                    player to their web apps
                  </span>
                </div>
              </div>
            </div>
          )}
          {showContent === 4 && (
            <div>
              <h3>
                Studio Developer
                <span className="text-[#64ffda]"> @Scout</span>
              </h3>
              <p className="text-sm">January - June 2017</p>
              <div className="mt-6">
                <div className="flex">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Developed and shipped highly interactive web applications
                    for Apple Music using Ember.js
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Built and shipped the Apple Music Extension within Facebook
                    Messenger leveraging third-party and internal APIs
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Architected and implemented the front-end of Apple Music's
                    embeddable web player widget, which lets users log in and
                    listen to full songs in the browser
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Contributed extensively to MusicKit.js, a JavaScript
                    framework that allows developers to add an Apple Music
                    player to their web apps
                  </span>
                </div>
              </div>
            </div>
          )}
          {showContent === 5 && (
            <div>
              <h3>
              Software Engineer Co-op 
                <span className="text-[#64ffda]"> @Starry</span>
              </h3>
              <p className="text-sm">July - December 2016</p>
              <div className="mt-6">
                <div className="flex">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Developed and shipped highly interactive web applications
                    for Apple Music using Ember.js
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow size={19} className="text-[#64ffda] mr-3" />
                  <span className="font-thin text-sm">
                    Built and shipped the Apple Music Extension within Facebook
                    Messenger leveraging third-party and internal APIs
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Architected and implemented the front-end of Apple Music's
                    embeddable web player widget, which lets users log in and
                    listen to full songs in the browser
                  </span>
                </div>
                <div className="flex mt-3">
                  <BiRightArrow
                    size={25}
                    className="text-[#64ffda] mr-3 whitespace-nowrap"
                  />
                  <span className="font-thin text-sm">
                    Contributed extensively to MusicKit.js, a JavaScript
                    framework that allows developers to add an Apple Music
                    player to their web apps
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
