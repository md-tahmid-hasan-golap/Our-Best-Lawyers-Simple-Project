import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto text-center bg-gray-200 p-40 rounded-lg">
        <h1 className="text-7xl mb-8 font-bold text-red-400">EORR 404</h1>
        <Link to="/">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              Back to Home
            </span>
          </a>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
