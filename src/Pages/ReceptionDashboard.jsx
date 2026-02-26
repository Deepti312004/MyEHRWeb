import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

import React from "react";
import { useNavigate } from "react-router-dom";

const ReceptionDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    {
      label: "Today's Date",
      value: new Date().toLocaleDateString(),
      icon: <CalendarTodayIcon />,
    },
    { label: "Registered Patients", value: 150, icon: <PersonAddIcon /> },
    { label: "Total Schedules", value: 24, icon: <BookOnlineIcon /> },
    { label: "Triage", value: 5 },
    { label: "Ready for Consultation", value: 8 },
  ];
  return (
    <>
      <Box
        sx={{
          margin: "100px 20px",
          paddingLeft: { xs: "1%", md: "3%" },
          paddingRight: { xs: "1%", md: "3%" },
        }}
      >
        <Typography variant="h6">Reception Dashboard</Typography>

        {/* Reception Status */}
        <Box sx={{ paddingLeft: "3%", marginTop: "30px" }}>
          <Grid container spacing={3}>
            {stats.map((item, idx) => (
              <Grid size={{ xs: 12, md: 3 }}>
                <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                  <CardContent sx={{ position: "relative" }}>
                    {/* <PersonAddIcon
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "primary.light",
                      }} 
                    />*/}
                    <Typography
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "primary.light",
                      }}
                    >
                      {item.icon}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {item.label}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* //Quick Actions */}
        <Card sx={{ my: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Actions
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={() => navigate("/dashboard/reception/registration")}
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  Register Patient
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={() => navigate("/dashboard/reception/patientList")}
                  fullWidth
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  View Patient List
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={() => navigate("/dashboard/reception/schedule")}
                  fullWidth
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  Schedule Appointments
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  fullWidth
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  Manage Triage
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Apply Status */}
        <Card sx={{ my: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Search Patient
            </Typography>
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Search by Patient name or Id"
                  placeholder=" Patient name/id"
                />
              </Grid>
              <Grid sx={{ xs: 12, md: 4 }}>
                <TextField
                  variant="outlined"
                  select
                  fullWidth
                  label="Visit Type"
                >
                  <MenuItem value="New Patient" label="New Patient">
                    New Patient
                  </MenuItem>
                  <MenuItem value="Walk In" label="Walk In">
                    Walk In
                  </MenuItem>
                  <MenuItem value="Emergency" label="Emergency">
                    Emergency
                  </MenuItem>
                  <MenuItem value="Follow Up" label="Follow Up">
                    Follow Up
                  </MenuItem>
                  <MenuItem value="TeleHealth" label="TeleHealth">
                    TeleHealth
                  </MenuItem>
                  <MenuItem value="Lab Review Only" label="Lab Review Only">
                    Lab Review Only
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid sx={{ xs: 12, md: 4 }}>
                <TextField variant="outlined" select fullWidth label="Status">
                  <MenuItem value="Registered" label="Registered">
                    Registered
                  </MenuItem>
                  <MenuItem value="Schedulled" label="Schedulled">
                    Schedulled
                  </MenuItem>
                  <MenuItem value="Ready for triage" label="Ready for triage">
                    Ready for triage
                  </MenuItem>
                  <MenuItem
                    value="Ready for Consultation"
                    label="Ready for Consultation"
                  >
                    Ready for Consultation
                  </MenuItem>
                  <MenuItem value="Completed" label="Completed">
                    Completed
                  </MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ReceptionDashboard;
