import { Box, Typography } from "@mui/material";
import React from "react";
import doctorimg from "../../assets/doctorimg.jpg";

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
          margin: "30px",
        }}
      >
        {/* LeftBox */}
        <Box
          sx={{
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "flex-start",
            // justifyContent: "flex-start",
            flex: 1,
            position: "relative",
            top: "0px",
            paddingLeft: { xs: "4%", md: "6%" },

            width: "100%",
            marginTop: 0,
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "35px", fontWeight: 500, mb: 3 }}
          >
            About Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "#474747" }}>
            Our EHR platform is built to make healthcare management simple,
            fast, and secure. We help clinics and hospitals manage patient
            records, appointments, billing, and specialist consultations from
            one intuitive dashboard.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "#474747" }}>
            By reducing paperwork and manual processes, we enable healthcare
            professionals to focus on what matters most — delivering better
            patient care.
          </Typography>
        </Box>

        {/* RightBox */}

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: { xs: "5%", md: "10%" },

            //   backgroundImage: `url("/doctorimg.jpg")`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   position: "relative",
          }}
        >
          <Box
            component="img"
            src={doctorimg}
            sx={{
              width: { xs: "100%", sm: "80%", md: "100%" },
              maxWidth: "400px",
              borderRadius: 3,
              objectFit: "cover",
              boxShadow: 3,
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
