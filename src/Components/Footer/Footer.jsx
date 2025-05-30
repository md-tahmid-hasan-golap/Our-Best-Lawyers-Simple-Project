import React from "react";
import footerImg from "../../assets/logo-footer.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black mt-16 text-base-content rounded p-10">
      <div className="flex space-x-4">
        <img src={footerImg} alt="" />
        <h2 className="text-xl font-medium text-[#FFFFFF]">Law.BD</h2>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4 text-[#FFFFFFB3]">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
        </div>
      </nav>
      <div className="grid grid-flow-col gap-4 text-[#FFFFFFB3]">
        <nav className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/g.lap.raj">
            <FaFacebook className="text-white" size={25} />
          </a>
          <a href="https://github.com/md-tahmid-hasan-golap">
            <FaGithub className="text-white" size={25} />
          </a>
          <a href="https://www.youtube.com/watch?v=2jMzt1q-PzQ">
            <IoLogoYoutube className="text-white" size={25} />
          </a>
          <a href="">
            <CiInstagram className="text-white" size={25} />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
