import React from "react";
import { assets } from "../assets/assets";
import ProfilePage from "../components/profile/ProfilePage";
import AboutMe from "../pages/user-profile/AboutMe";
import ProfileNavBar from "../components/profile/ProfileNavBar";
import Bookings from "../pages/user-profile/Bookings";
import { Outlet } from "react-router";

const ProfilePageLayout = () => {
  return (
    <div className="relative">
      <img
        src={assets.banners.backgroundImage}
        alt="background-image"
        className="absolute top-0 right-0 left-0"
      />

      <ProfilePage />

      <ProfileNavBar />

      <Outlet />
    </div>
  );
};

export default ProfilePageLayout;
