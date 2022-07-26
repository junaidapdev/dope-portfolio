import React from "react";
import jsforfree from "../../src/images/jsforfree.png";
import fullstack from "../../src/images/fullstack.png";
import goldmineImg from "../../src/images/goldmineImg.png";
import projectkit from "../../src/images/projectkit.png";
import daysofcodeImg from "../../src/images/daysofcodeImg.png";

const Products = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-12 mb-6 text-black">
        Products
      </h3>

      <div className="flex flex-col gap-4">
        {/* <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg ml-0"> */}
        <div className="p-6 flex flex-row gap-4 max-w-2xl items-center bg-white rounded-lg border border-gray-200 shadow-md border-gray-700">
          <img
            src={goldmineImg}
            className="w-1/3 flex"
            alt=""
            // style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"
          />

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Goldmine for Developers, Designers & Creators.
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              700+ Curated websites and learning resources.
            </p>

            <div className="flex mt-2 item-center">
              <svg
                className="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-700 fill-current "
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700 md:text-xl">$3</h1>
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Unlock now 🚀
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-row gap-4 max-w-2xl items-center bg-white rounded-lg border border-gray-200 shadow-md border-gray-700">
          <img
            src={fullstack}
            className="w-1/3 flex"
            alt=""
            // style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"
          />

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Complete FullStack Developer Roadmap 2022 | 300+ Resources
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Clear Cut.. Complete.. Roadmap for Full Stack Developer in 2022
              With 300+ Resources.
            </p>

            <div className="flex mt-2 item-center">
              <svg
                className="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-700 fill-current "
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700 md:text-xl">$0</h1>
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Unlock now 🚀
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-row gap-4 max-w-2xl items-center bg-white rounded-lg border border-gray-200 shadow-md border-gray-700">
          <img
            src={projectkit}
            className="w-1/3 flex"
            alt=""
            // style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"
          />

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Project Building Tool Kit
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              ➽ Icon Websites ➽ Illustrations Websites ➽ Color Websites ➽
              Gradient Tools➽ Design Inspiration Websites ➽ Pattern Generator
              Websites{" "}
            </p>

            <div className="flex mt-2 item-center">
              <svg
                className="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-700 fill-current "
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700 md:text-xl">$0</h1>
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Unlock now 🚀
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-row gap-4 max-w-2xl items-center bg-white rounded-lg border border-gray-200 shadow-md border-gray-700">
          <img
            src={jsforfree}
            className="w-1/3 flex"
            alt=""
            // style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"
          />

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Learn & Master Javascript for FREE
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Amazing resources for learning Javascript.{" "}
            </p>

            <div className="flex mt-2 item-center">
              <svg
                className="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-700 fill-current "
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700 md:text-xl">$0</h1>
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Unlock now 🚀
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-row gap-4 max-w-2xl items-center bg-white rounded-lg border border-gray-200 shadow-md border-gray-700">
          <img
            src={daysofcodeImg}
            className="w-1/3 flex"
            alt=""
            // style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"
          />

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800">
              #100daysofCode Notion Template
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              ➪ Record your daily progress ➙ What did you learn today? ➙
              Important Points to be noted. ➙ Add Screenshots ➙ Add Code
              Snippets ➙ Links to Projects ➙ Add date & hours of coding
            </p>

            <div className="flex mt-2 item-center">
              <svg
                className="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-700 fill-current "
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700 md:text-xl">$0</h1>
              <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                Unlock now 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
