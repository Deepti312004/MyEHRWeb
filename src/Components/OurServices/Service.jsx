import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Patient Records",
      description:
        "Securely manage and access patient medical records anytime.",
    },
    {
      title: "Appointments",
      description: "Book, reschedule, and manage appointments with ease.",
    },
    {
      title: "Doctor Management",
      description: "Manage doctor profiles, schedules, and availability.",
    },
    {
      title: "Specialist Doctors",
      description:
        "Consult with certified specialists across multiple medical fields.",
    },
    {
      title: "Reports & Analytics",
      description: "Generate clinical and administrative reports of patients.",
    },
    {
      title: "Billing & Invoicing",
      description: "Handle billing, insurance, and invoices efficiently.",
    },
    // {
    //   title: "Telemedicine",
    //   description: "Enable virtual consultations with patients.",
    // },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          color: "#111",
          textAlign: "center",
          margin: "40px 0px",
          padding: "0% 6%",
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "30px", fontWeight: "bold", margin: "20px 10px" }}
        >
          Services
        </Typography>
        <Grid container spacing={4} sx={{ margin: "40px 25px", width: "100%" }}>
          {services.map((service, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  flexGrow: 1,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                  backgroundColor: "#c9c6c6",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1, color: "#333" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{ textAlign: "center", p: "auto", marginRight: 5 }}
                >
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Service;
