import React from "react";
import {NavLink} from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {/* <div
            className=""
            id="navbar-cta"
          > */}
            <ul className="flex gap-4">
              <li>
                <NavLink
                  to="/"
                  className="font-semibold text-gray-400 hover:text-gray-500 hover:bg-gray-400 hover:rounded-border"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

            <li>
                <NavLink
                  to="/products"
                  className="font-smibold text-gray-400 hover:text-gray-500 hover:bg-gray-400 hover:rounded-border"
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className="font-semibold text-gray-400 hover:text-gray-500 hover:bg-gray-400 hover:rounded-border"
                >
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="font-semibold text-gray-400 hover:text-gray-500 hover:bg-gray-400 hover:rounded-border"
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
