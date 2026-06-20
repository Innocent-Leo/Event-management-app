import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";

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
    </Routes>
  );
};

export default AppRoutes;
