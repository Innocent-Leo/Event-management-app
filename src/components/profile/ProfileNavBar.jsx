import React from "react";
import { NavLink } from "react-router";

const ProfileNavBar = () => {
  return (
    <div className="text-grey-4 flex items-center justify-center gap-6 py-6 font-semibold">
      <NavLink to="." className="text-light-cyan underline underline-offset-3">
        About me
      </NavLink>
      <NavLink to="bookings" className="">
        My bookings
      </NavLink>
      <div>My events</div>
      <div>My favourites</div>
      <div>My calendar</div>
      <div>Settings</div>
    </div>
  );
};

export default ProfileNavBar;
