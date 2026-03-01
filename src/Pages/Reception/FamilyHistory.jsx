import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const FamilyHistory = () => {
  const [formData, setformData] = useState({
    additional: "",
  });

  const handleChange = (field) => (event) => {
    setformData({ ...formData, [field]: event.target.value });
  };
  return (
    <>
      <Box component="form">
        <Typography variant="body1">Family History</Typography>
        <Box sx={{my:3}}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              variant="outlined"
              label="Family Medical History"
              placeholder="Include Family History of major conditions "
              fullWidth
              multiline
              maxRows={3}
              value={formData.additional}
              onChange={handleChange("additional")}
            ></TextField>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default FamilyHistory;
