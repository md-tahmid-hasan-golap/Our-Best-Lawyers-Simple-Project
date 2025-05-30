import React from "react";
import BannerImg from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div
        className="hero min-h-screen rounded-2xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZzgwWPbf/banner-img-1.png)",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold">
              It avoids subjective claims or <br /> exaggeration that might
              raise red <br />
              flags legally
            </h1>
            <p className="mb-5">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a <br /> routine checkup or urgent consultation, book appointments
              in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
