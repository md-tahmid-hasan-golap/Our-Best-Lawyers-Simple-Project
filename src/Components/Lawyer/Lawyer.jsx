import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Lawyer = ({ lawyer }) => {
  const handleTost = () => {
    toast.success("already Exisit");
  };
  //   console.log(lawyer);
  const { image, Experience, name, expart, price, id } = lawyer;
  return (
    <div className="flex gap-10 shadow p-2 rounded-md">
      <div>
        <img className="w-52 h-40 rounded-md" src={image} alt="" />
      </div>
      <div>
        <div className="flex gap-4">
          <a
            href="#_"
            className="inline-block px-5 py-2 mx-auto text-green-700 bg-green-200 rounded-full hover:bg-blue-700 hover:text-white md:mx-0"
          >
            Available
          </a>
          <a
            href="#_"
            className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
          >
            Experience : {Experience}
          </a>
        </div>
        <h1 className="text-3xl font-medium text-center pt-2">{name}</h1>
        <h2 className="text-2xl text-center pt-2">{expart} Lowyar</h2>
        <p className="text-center pt-2">
          <b>Consultation Fee : </b>
          <span className="text-green-700"> Tk : {price}</span>
        </p>
        <Link onClick={handleTost} to={`/lowyarDetails/${id}`}>
          <div className="flex justify-center py-4">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                View Details
              </span>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Lawyer;
