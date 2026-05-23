import React from "react";
import { assets } from "../../assets/assets";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Banner = () => {
  return (
    <div className="relative">
      <span className="bg-cyan-darkest absolute top-45 left-20 rounded-full p-4 text-white opacity-65">
        <SlArrowLeft />
      </span>

      <img src={assets.banners.heroImage1} alt="hero-image1" />

      <span className="bg-cyan-darkest absolute top-45 right-20 rounded-full p-4 text-white">
        <SlArrowRight />
      </span>

      <div className="absolute bottom-8 left-162 flex items-center justify-center gap-3">
        <span className="bg-light-cyan rounded-full p-2"></span>
        <span className="rounded-full bg-white p-2"></span>
        <span className="rounded-full bg-white p-2"></span>
      </div>
    </div>
  );
};

export default Banner;
