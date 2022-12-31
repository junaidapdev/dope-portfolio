import React from "react";
import avatar from "../images/avatar.png";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
            Mohammed Junaid
          </h1>
          <h3 className="text:xl text-[#ffffff] mb-4">Developer.</h3>
          <p className="text-[#B8B8B8]">
            I do Web stuff, mostly frontend. Creates content on twitter, has 62k
            followers on twitter, and building codemarch, have over 40k
            followers on twitter.
          </p>
          {/* <div>
            <Buttons className="bg-gray-600 gap-2 text-white px-6 ml-0">
              View Github
            </Buttons>
            <Buttons className="bg-blue-600 text-white px-6 m-3">
              View LinkedIn
            </Buttons>
          </div> */}
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto items-center	">
          <img
            src={avatar}
            className="rounded-full filter ml-0 scale-115"
            alt=""
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-12 mb-6 text-white">
          {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black"> */}
          Projects
        </h3>
        <div className="flex flex-col gap-4">
          <div className="p-1  rounded-lg">
            <div className="p-6 gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Examkit
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#b8b8b8]">
                A Repository of notes & materials - Simple but powerful (Solved real life problem of my classmates)
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  HTML
                </span>
                <span className="text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  CSS
                </span>
              </div>
              <div className="flex gap-3 mt-4">
                {/* <a
                  href="#"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                 🚀 Website 
                </a> */}
                <a
                  href="https://examkit.netlify.app/"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                  🔗 Live
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 rounded-lg">
            <div className="p-6 gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Home-hub
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#b8b8b8]">
                A website to Rent & Sell your house
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  CSS
                </span>
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  React
                </span>
              </div>
              <div className="flex gap-3 mt-4">
                {/* <a
                  href="#"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                 🚀 Website 
                </a> */}
                <a
                  href="https://github.com/junaidapdev/home-hub"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                  🔗 Github
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 rounded-lg">
            <div className="p-6 gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  My Portfolio
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#b8b8b8]">
                My Portfolio website showcases projects, skills, ebooks written,
                and blogs.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  React
                </span>
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-3 mt-4">
                {/* <a
                  href="#"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                 🚀 Website 
                </a> */}
                <a
                  href="https://www.mohammedjunaid.in/"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                  🔗 Live
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 rounded-lg">
            <div className="p-6 gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  CampGenie
                </h5>
              </a>
              <p className="mb-3 font-normal text-[#b8b8b8]">
              Campground finder for tourists
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  CSS
                </span>
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Bootstrap
                </span>
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  MapBox API
                </span>
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  NodeJS
                </span>
                <span className="text-[#ffffff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-3 mt-4">
                {/* <a
                  href="#"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                 🚀 Website 
                </a> */}
                <a
                  href="https://github.com/junaidapdev/home-hub"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-white bg-[#101010]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#b8b8b8]"
                >
                  🔗 Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="md:text-2xl mt-8 justify-center	text-lg flex text-white">
          If you'd like to talk, just shoot an email
        </p>
        <div className="text-lg flex items-center justify-center w-max mx-auto px-10 my-4 font-semibold border-2 text-[#101010] bg-white p-1 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          </svg>

          <span>junaidap.dev@gmail.com</span>
        </div>
        <div className="flex flex-row mt-8 mx-auto justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 sm:px-3 sm:py-2 rounded-lg  hover:text-gray-500 hover:bg-gray-200 transition-all px-4 py-2 m-2 text-lg font-semibold"
            href="https://twitter.com/mdjunaidap"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 sm:px-3 sm:py-2 rounded-lg hover:text-gray-500 hover:bg-gray-200 transition-all px-4 py-2 m-2 text-lg font-semibold"
            href="https://twitter.com/mdjunaidap"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 sm:px-3 sm:py-2 rounded-lg hover:text-gray-500 hover:bg-gray-200 transition-all px-4 py-2 m-2 text-lg font-semibold"
            href="https://twitter.com/mdjunaidap"
          >
            Github
          </a>
          {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-purple-100 px-4 py-2 rounded m-2 text-lg font-semibold text-gray-500"
              href="https://twitter.com/mdjunaidap"
            >
              Newsletter
            </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
