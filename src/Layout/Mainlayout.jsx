import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Mainlayout;
