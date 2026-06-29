import React from "react";
import { assets } from "../../assets/assets";
import { PiSlidersHorizontal, PiMagnifyingGlassLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsTicket } from "react-icons/bs";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="bg-cyan-darkest flex items-center justify-between gap-40 px-8 py-2">
      <div className="flex items-center gap-5">
        <img className="w-22" src={assets.brandLogo} alt="brand-logo" />

        <div className="flex items-center gap-4">
          <div className="relative">
            <PiMagnifyingGlassLight
              size={18}
              className="text-cyan-darkest absolute top-2.5 left-4"
            />

            <input
              placeholder="Search all"
              className="placeholder:text-grey-3 h-10 w-80 rounded-full bg-white px-10 py-4.5 leading-none placeholder:text-xs placeholder:font-medium"
              type="search"
              name=""
              id=""
            />

            <div className="bg-orange absolute top-2.5 right-4 flex items-center justify-center rounded-md px-1.5">
              <PiSlidersHorizontal
                size={18}
                className="text-cyan-lightest rotate-x-180"
              />
            </div>
          </div>
          <div className="text-cyan-lightest flex flex-col items-center justify-center gap-0.5">
            <SlLocationPin size={14} />

            <div className="flex items-center justify-center gap-0.5">
              <button className="text-[9px]">Lagos</button>

              <TiArrowSortedDown size={10} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-8">
        <ul className="text-cyan-lightest flex items-center gap-6 font-medium">
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Stories</a>
          </li>
          <li>
            <a href="">Our Mission</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>

        <Link
          to="/signin"
          className="bg-orange text-cyan-lightest flex h-10 w-32 items-center justify-center gap-2 rounded-md font-medium"
        >
          <BsTicket size={15} strokeWidth={0.25} className="rotate-45" />
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
