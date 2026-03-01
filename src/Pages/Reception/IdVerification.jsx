import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const IdVerification = () => {
  const [formData, setformData] = useState({
    idType: "",
    idNumber: "",
  });

  const handleChange = (field) => (event) => {
    setformData({ ...formData, [field]: event.target.value });
  };

  const idTypes = [
    { id: 1, name: "Driver's License" },
    { id: 2, name: "State Id" },
    { id: 3, name: "Passport" },
    { id: 4, name: "Miltary Id" },
    { id: 5, name: "Others" },
  ];
  return (
    <>
      <Box component="form">
        <Typography variant="body1">Id Verification</Typography>
        <Box sx={{my:3}}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              value={formData.idType}
              onChange={handleChange("idType")}
              label="ID Type"
              variant="outlined"
              required
              select
              fullWidth
            >
              {idTypes.map((idT) => (
                <MenuItem value={idT.name} label={idT.name}>
                  {idT.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              value={formData.idNumber}
              onChange={handleChange("idNumber")}
              label="ID Number"
              variant="outlined"
              required
              fullWidth
              placeholder="DL-GA-77894512"
            ></TextField>
          </Grid>
          {/* <Grid size={{ xs: 12, md: 6 }}>
            <Button type="file" variant="contained" fullWidth>
              Upload ID Front
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Button type="file" variant="contained" fullWidth>
              Upload ID Back
            </Button>
          </Grid> */}
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default IdVerification;
