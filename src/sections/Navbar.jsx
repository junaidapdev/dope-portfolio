import React from "react";
import {NavLink} from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded"> */}
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-[#f5f5f5] bg-opacity-60">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {/* <div
            className=""
            id="navbar-cta"
          > */}
            <ul className="flex gap-4 mt-2">
              <li>
                <NavLink
                  to="/"
                  className="font-semibold text-[#999999]  p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-[#333333] transition-all"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

            <li>
                <NavLink
                  to="/products"
                  className="font-semibold text-[#999999]  p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-[#333333] transition-all"
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className="font-semibold text-[#999999]  p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-[#333333] transition-all"
                >
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="font-semibold text-[#999999]  p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-[#333333] transition-all"
                >
                  About
                </NavLink>
              </li> 
            </ul>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
