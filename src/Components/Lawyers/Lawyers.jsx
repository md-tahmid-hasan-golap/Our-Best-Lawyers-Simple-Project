import React, { useEffect, useState } from "react";
import Lawyer from "../Lawyer/Lawyer";
import { Link } from "react-router";

const Lawyers = ({ data }) => {
  const [displayshow, setDisplayshow] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      setDisplayshow(data);
    } else {
      setDisplayshow(data.slice(0, 6));
    }
  }, [data, show]);
  //   console.log(data);
  return (
    <div className="max-w-11/12 mx-auto mt-16">
      <h1 className="text-5xl font-medium text-center mb-4">
        Our Best Lawyers
      </h1>
      <p className="text-center">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
        {displayshow.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
        ))}
      </div>
      <Link onClick={() => setShow(!show)} className="flex justify-center py-6">
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              {show ? "Show Less Lawyer" : "Show All Lawyer"}
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </Link>
    </div>
  );
};

export default Lawyers;
