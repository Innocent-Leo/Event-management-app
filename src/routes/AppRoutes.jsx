import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import SignupStep1 from "../pages/auth/SignupStep1";
import SignupStep2 from "../pages/auth/SignupStep2";
import SignupStep3 from "../pages/auth/SignupStep3";
import ProfilePageLayout from "../layouts/ProfilePageLayout";
import AboutMe from "../pages/user-profile/AboutMe";
import Bookings from "../pages/user-profile/MyBookings";
import MyEvents from "../pages/user-profile/MyEvents";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Page */}
        <Route index element={<HomePage />} />

        {/* Profile Page */}
        <Route path="profile" element={<ProfilePageLayout />}>
          <Route index element={<AboutMe />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="events" element={<MyEvents />} />
        </Route>
      </Route>

      {/* Auth */}
      <Route path="signin" element={<Signin />} />
      <Route path="signup">
        <Route index element={<Signup />} />
        <Route path="step-1" element={<SignupStep1 />} />
        <Route path="step-2" element={<SignupStep2 />} />
        <Route path="step-3" element={<SignupStep3 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
