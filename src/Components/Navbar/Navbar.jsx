import React from "react";

import Logoimg from "../../assets/logo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-blue-600" : "")}
      >
        <li className="m-3 font-medium">Home</li>
      </NavLink>
      <NavLink
        to="/my-booking"
        className={({ isActive }) => (isActive ? "text-blue-600 " : "")}
      >
        <li className="m-3 font-medium">My-Bookings</li>
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) => (isActive ? "text-blue-600 " : "")}
      >
        <li className="m-3 font-medium">Blogs</li>
      </NavLink>
      <NavLink
        to="/contactUs"
        className={({ isActive }) => (isActive ? "text-blue-600 " : "")}
      >
        <li className="m-3 font-medium">Contact Us</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl hidden md:flex items-center">
          <img className="m-3" src={Logoimg} alt="" />
          <h1>Law.BD</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="#_"
          className="relative p-0.5 m-3 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Contact Now</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
