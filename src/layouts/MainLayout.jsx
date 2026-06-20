import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />

      <div className="*:not-first:mx-42">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
