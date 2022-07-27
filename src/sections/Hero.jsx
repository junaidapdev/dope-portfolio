import React from "react";
import avatar from "../images/avatar.png";
const Hero = () => {
  return (
    <div className="Hero">


<div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">
            Mohammed Junaid
          </h1>
          <h3 className="text:xl text-gray-700 mb-4">
            MERN Stack Developer
          </h3>
          <p className="text-gray-600">
            I build interactive and beautiful websites with React & creates content on Twitter.
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
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-12 mb-6 text-black">
        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black"> */}
          Projects
        </h3>
        <div className="flex flex-col gap-4">
          <div className="p-1  rounded-lg">
            <div className="p-6 gap-4 max-w-2xl items-center bg-white rounded-lg border border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  CampGenie🔥
                </h5>
              </a>
              <p className="mb-3 font-normal">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Bootstrap
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  ExpressJS
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  NodeJS
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  MongoDB
                </span>
                
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-gray-900 bg-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#000]"
                >
                 🚀 Website 
                </a>
                <a
                  href="https://github.com/junaidapdev/camp_genie"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-gray-900 bg-white  rounded-lg hover:border-[#000]"
                >
                  🔗 Github 
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 rounded-lg">
            <div className="p-6 max-w-2xl items-center bg-white rounded-lg border border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Smuffy
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex flex-wrap gap-1.5">
              <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  React
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Express
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Node
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  MongoDB
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Stripe 
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  PayPal 
                </span>
                
              </div>
              <div className="flex gap-3 mt-4">
              <a
                  href="#"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-gray-900 bg-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#000]"
                >
                 🚀 Website 
                </a>
                <a
                  href="https://github.com/junaidapdev/ecommerce"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-gray-900 bg-white  rounded-lg hover:border-[#000]"
                >
                  🔗 Github 
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 rounded-lg">
            <div className="p-6 max-w-2xl items-center bg-white rounded-lg border border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Workout Buddy
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This is a website to add different workouts.
              </p>
              <div className="flex flex-wrap gap-1.5">
              <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  React
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Express
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Node
                </span>
                <span className="border border-black text-black-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                  MongoDB
                </span>
              
                
              </div>
              <div className="flex gap-3 mt-4">
              <a
                  href="#"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-gray-900 bg-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:border-[#000]"
                >
                 🚀 Website 
                </a>
                <a
                  href="https://github.com/junaidapdev/Workout-Buddy"
                  className="inline-flex items-center border py-2 px-3 text-sm font-small text-center text-gray-900 bg-white  rounded-lg hover:border-[#000]"
                >
                  🔗 Github 
                </a>
              </div>
            </div>
          </div>
         
          
        </div>
        <p className="md:text-2xl mt-8 justify-center	text-lg flex text-gray-600">
        If you'd like to talk, just shoot an email
      </p>
      <div className="text-lg flex items-center justify-center w-max mx-auto px-10 my-4 font-semibold border-2 text-gray-500 bg-white- p-1 rounded-xl">
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
          className="text-gray-600 p-2 sm:px-3 sm:py-2 rounded-lg hover:text-gray-500 hover:bg-gray-200 transition-all px-4 py-2 m-2 text-lg font-semibold"
          href="https://twitter.com/mdjunaidap"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 p-2 sm:px-3 sm:py-2 rounded-lg hover:text-gray-500 hover:bg-gray-200 transition-all px-4 py-2 m-2 text-lg font-semibold"
          href="https://twitter.com/mdjunaidap"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 p-2 sm:px-3 sm:py-2 rounded-lg hover:text-gray-500 hover:bg-gray-200 transition-all px-4 py-2 m-2 text-lg font-semibold"
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
