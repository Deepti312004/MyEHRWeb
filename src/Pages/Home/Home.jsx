import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import bgimg from "../../assets/bgimg.jpg";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/OurServices/Service";
import AboutUs from "../../Components/AboutUS/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Service />
      <AboutUs />
    </>
  );
};

export default Home;
