import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import SignupStep1 from "../pages/auth/SignupStep1";
import SignupStep2 from "../pages/auth/SignupStep2";
import SignupStep3 from "../pages/auth/SignupStep3";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Page */}
        <Route index element={<HomePage />} />
      </Route>

      {/* Auth */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/step-1" element={<SignupStep1 />} />
      <Route path="/signup/step-2" element={<SignupStep2 />} />
      <Route path="/signup/step-3" element={<SignupStep3 />} />
    </Routes>
  );
};

export default AppRoutes;
