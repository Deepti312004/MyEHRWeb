import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const VisitInfo = () => {
  const [formData, setformData] = useState({
    visitType: "",
    reasonForVisit: "",
  });

  const handleChange = (field) => (event) => {
    setformData({ ...formData, [field]: event.target.value });
  };

  const visitType = [
    {
      id: 1,
      name: "New Visit",
    },
    { id: 2, name: "Follow-up" },
    {
      id: 3,
      name: "Walk-in",
    },
    { id: 4, name: "Urgent Drive" },
    {
      id: 5,
      name: "Emergency",
    },
    { id: 6, name: "TeleHealth" },
    { id: 7, name: "Lab Review Only" },
  ];
  return (
    <>
      <Box sx={{ my: 3 }}>
        <Typography>Visit Info</Typography>
        <Box sx={{ my: 3 }}>
          <Grid container rowSpacing={3} columnSpacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                required
                fullWidth
                label="Visit Type"
                value={formData.visitType}
                variant="outlined"
                onChange={handleChange("visitType")}
              >
                {visitType.map((visit) => (
                  <MenuItem label={visit.name} value={visit.name}>
                    {visit.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                required
                variant="outlined"
                label="Reason for Visit"
                fullWidth
                value={formData.reasonForVisit}
                onChange={handleChange("reasonForVisit")}
              ></TextField>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default VisitInfo;
