import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",

          height: "100vh",
          backgroundImage: `url("/bgimg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }}
        >
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              color: "#fff",
              p: "6%",
              top: "25%",
            }}
          >
            <Typography variant="h3" fontSize="50px" fontWeight="500">
              Welcome to EHR
            </Typography>
          </Box>
        </Box>

        {/* <img
            src={bgimg}
            alt=""
            sx={{ width: "100%", height: "100vh", objectFit: "cover" }}
          /> */}
      </Box>
    </>
  );
};

export default Hero;
