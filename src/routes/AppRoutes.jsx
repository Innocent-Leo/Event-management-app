import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Signin from "../pages/auth/Signin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Page */}
        <Route index element={<HomePage />} />
      </Route>

      {/* Auth */}
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default AppRoutes;
