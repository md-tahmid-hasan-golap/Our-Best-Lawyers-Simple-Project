import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const LowyarDetails = () => {
  const handleTost = () => {
    toast.success("already Exisit");
  };
  const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  const yowarid = parseInt(id);
  // console.log(yowarid);
  const lowers = data.find((lower) => lower.id === yowarid);
  console.log(lowers);
  const { image, name, License, price, Experience, work } = lowers;

  return (
    <div className="max-w-11/12 mx-auto flex gap-10 shadow-md p-3 rounded-md">
      <div>
        <img className="rounded-md w-64 h-56" src={image} alt="" />
      </div>
      <div className="space-y-2">
        <p className="text-green-500 text-center ml-56">
          Experience + {Experience}
        </p>
        <h2 className="text-3xl font-medium mt-2 text-center ml-56">{name}</h2>

        <p className="mt-5 mb-3">criminal RLicense No: : {License}</p>
        <div className="space-x-3">
          {" "}
          Availability :
          {work?.map((wor) => (
            <a
              href="#_"
              className="relative  inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                {wor}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-5">
          <b>Consultation Fee :</b>{" "}
          <span className="text-green-500">Tk {price}</span>{" "}
        </p>
        <div className="flex justify-center">
          <NavLink onClick={handleTost} to="/my-booking">
            {" "}
            <a
              href="#_"
              className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  classn="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Book Appointment Now</span>
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LowyarDetails;
