import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <nav className="bg-cyan-darkest flex items-center justify-between gap-50 px-10 py-4">
      <div className="flex items-center gap-10">
        <img className="w-30" src={assets.icons.brandLogo} alt="brand-logo" />

        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={assets.icons.searchIcon}
              alt="search-icon"
              className="absolute top-5.5 left-6 w-4.5"
            />

            <input
              placeholder="Search all"
              className="placeholder:text-grey-3 h-15 w-102.5 rounded-4xl bg-white px-13 py-4.5 leading-none placeholder:font-medium"
              type="search"
              name=""
              id=""
            />

            <div className="bg-orange absolute top-4 right-7 flex h-6.5 w-11 items-center justify-center rounded-lg">
              <img
                src={assets.icons.sliderIcon}
                alt="slidere-icon"
                className="w-4"
              />
            </div>
          </div>
          <div className="text-cyan-lightest text-xs">pennsylvania</div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-9">
        <ul className="text-cyan-lightest flex items-center gap-7 text-xl font-medium">
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

        <button
          type="submit"
          className="bg-orange text-cyan-lightest flex h-15 w-40 items-center justify-center gap-2.5 rounded-lg text-xl font-medium"
        >
          <img
            src={assets.icons.ticketIcon}
            alt="ticket-icon"
            className="w-4.5"
          />
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
