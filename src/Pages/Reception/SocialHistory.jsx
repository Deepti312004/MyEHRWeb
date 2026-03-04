import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const SocialHistory = () => {
  const [formData, setformData] = useState({
    Smoking: "",
    AlcoholUse: "",
    RecreationalDrugUse: "",
    AdditionalSocialHistory: "",
  });

  const handleChange = (field) => (event) => {
    setformData({ ...formData, [field]: event.target.value });
  };

  const smoke = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
    { id: 3, name: "Former" },
  ];

  const alcohol = [
    { id: 1, name: "No" },
    { id: 2, name: "Occasional" },
    { id: 3, name: "Regular" },
    { id: 4, name: "Heavy" },
  ];

  const drug = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
    { id: 3, name: "Former" },
  ];

  return (
    <>
      <Box component="form">
        <Typography variant="body1">Social History</Typography>
        <Box sx={{my:3}}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.Smoking ?? ""}
              onChange={handleChange("Smoking")}
              label="Smoking"
              placeholder="Smoking"
              select
              variant="outlined"
              fullWidth
            >
              {smoke.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.AlcoholUse ??""}
              onChange={handleChange("AlcoholUse")}
              label="Alcohol Use"
              placeholder="Alcohol Use"
              select
              variant="outlined"
              fullWidth
            >
              {alcohol.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.RecreationalDrugUse ??  ""}
              onChange={handleChange("RecreationalDrugUse")}
              label=" Recreational Drug Use"
              placeholder=" Recreational Drug Use"
              select
              variant="outlined"
              fullWidth
            >
              {drug.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              label=" Additional Social History"
              fullWidth
              multiline
              size="medium"
              placeholder="Exercise habits, diet, etc."
              value={formData.AdditionalSocialHistory}
              onChange={handleChange("AdditionalSocialHistory")}
            ></TextField>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SocialHistory;
