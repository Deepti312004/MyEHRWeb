import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const VisitInfo = ({formData, setFormData}) => {
  // const [formData, setformData] = useState({
  //   visitType: "",
  //   reasonForVisit: "",
  // });

  const handleChange = (field) => (event) => {
    setFormData((prev)=>({ ...prev, [field]: event.target.value }));
  };


  const visitType = [
    {
      id: 1,
      name: "New Visit"
    },
    { id: 2, name: "Follow Up" },
    {
      id: 3,
      name: "Walk-In"
    },

    {
      id: 4,
      name: "Emergency"
    },
    { id: 5, name: "TeleHealth" },
    { id: 6, name: "Lab Review Only" },
  ];
  return (
    <>
      <Box sx={{ my: 3 }}>
        <Typography variant="body1">Visit Info</Typography>
        <Box sx={{ my: 3 }}>
          <Grid container rowSpacing={3} columnSpacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                required
                fullWidth
                label="Visit Type"
                value={formData.visitType ?? ""}
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
                value={formData.reasonForVisit ?? ""}
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
