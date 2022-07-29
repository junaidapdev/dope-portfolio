import React from "react";
import Footer from "../sections/Footer";

const Blogs = () => {
  return (
    <div>
      <h3 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
        Blogs
      </h3>

      <div className="flex flex-col  gap-4">
      <div className="p-6 flex gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
          <div className="w-full">
            <h1 className="text-xl font-bold text-white">
              What to Learn? - Before Starting Web Dev🚀
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Concepts you should learn before stepping into web development
            </p>

            <div className="flex justify-between mt-3 item-center">
              <a href="https://mdjunaid.hashnode.dev/what-to-learn-before-starting-web-development" target="_blank" rel="noopener noreferrer">
              <button className="px-2 py-1 text-xs font-bold text-[#101010] hover:text-white uppercase transition-colors duration-200 transform bg-white rounded hover:bg-[#101010]  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Read Now ❯{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 flex gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
          <div className="w-full">
          <h1 className="text-xl font-bold text-white">
              Top 22 GitHub Repos for JavaScript Developers 🤩
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Best GitHub Repos for JavaScript Developers
            </p>

            <div className="flex justify-between mt-3 item-center">
              <a href="https://mdjunaid.hashnode.dev/are-you-a-javascript-developer-top-22-github-repos-for-javascript-developers" target="_blank" rel="noopener noreferrer">
              <button className="px-2 py-1 text-xs font-bold text-[#101010] hover:text-white uppercase transition-colors duration-200 transform bg-white rounded hover:bg-[#101010]  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Read Now ❯{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 flex gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
          <div className="w-full">
          <h1 className="text-xl font-bold text-white">
              25 Must Use Insane Websites for Content creators🔥
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Are You Content Creator Then This Blog Will Help Definitely You!!
            </p>

            <div className="flex justify-between mt-3 item-center">
              <a href="https://mdjunaid.hashnode.dev/25-must-use-insane-websites-for-content-creators" target="_blank" rel="noopener noreferrer">
              <button className="px-2 py-1 text-xs font-bold text-[#101010] hover:text-white uppercase transition-colors duration-200 transform bg-white rounded hover:bg-[#101010]  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Read Now ❯{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 flex gap-4 max-w-2xl items-center bg-[#101010] rounded-lg border border-white">
          <div className="w-full">
          <h1 className="text-xl font-bold text-white">
              Top 10 Javascript Array Methods🔥 -- Decoded.
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Javascript array methods explanation with examples.
            </p>

            <div className="flex justify-between mt-3 item-center">
              <a href="https://mdjunaid.hashnode.dev/top-10-javascript-array-methods-decoded" target="_blank" rel="noopener noreferrer">
              <button className="px-2 py-1 text-xs font-bold text-[#101010] hover:text-white uppercase transition-colors duration-200 transform bg-white rounded hover:bg-[#101010]  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Read Now ❯{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
