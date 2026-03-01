import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ImmunizationHistory = () => {
  const [formData, setformData] = useState({
    CovidVaccine: "",
    FluShot: "",
    Tdap: "",
    Hepatitis: "",
    Varicella: "",
    MMR: "",
    Additional: "",
  });

  const handleChange = (field) => (event) => {
    setformData({ ...formData, [field]: event.target.value });
  };

  const covid = [
    { id: 1, name: "Completed" },
    { id: 2, name: "Partial" },
    { id: 3, name: "Not Recieved" },
  ];

  const flu = [
    { id: 1, name: "Not taken this year" },
    { id: 2, name: "Last year" },
    { id: 3, name: "This year" },
    { id: 4, name: "Not received" },
  ];

  const tdap = [
    { id: 1, name: "Up to date" },
    { id: 2, name: "Due" },
    { id: 3, name: "Unknown" },
  ];

  const hepatitis = [
    { id: 1, name: "Completed" },
    { id: 2, name: "Partial" },
    { id: 3, name: "Not Recieved" },
  ];
  const varicella = [
    { id: 1, name: "Completed" },

    { id: 2, name: "Not Recieved" },
    { id: 3, name: "Had Diseased" },
  ];

  const mmr = [
    { id: 1, name: "Completed" },
    { id: 2, name: "Partial" },
    { id: 3, name: "Not Recieved" },
  ];
  return (
    <>
      <Box component="form">
        <Typography variant="body1">Immunization History</Typography>
        <Box sx={{my:3}}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.CovidVaccine}
              onChange={handleChange("CovidVaccine")}
              label="Covid-19 Vaccine"
              placeholder="Covid-19 Vaccine"
              select
              variant="outlined"
              fullWidth
            >
              {covid.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.FluShot}
              onChange={handleChange("FluShot")}
              label="Flu Shot"
              placeholder="Flu Shot"
              select
              variant="outlined"
              fullWidth
            >
              {flu.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.Tdap}
              onChange={handleChange("Tdap")}
              label="Tdap (Tetanus)"
              placeholder="Tdap (Tetanus)"
              select
              variant="outlined"
              fullWidth
            >
              {tdap.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.Hepatitis}
              onChange={handleChange("Hepatitis")}
              label="Hepatitis B"
              placeholder="Hepatitis B"
              select
              variant="outlined"
              fullWidth
            >
              {hepatitis.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.Varicella}
              onChange={handleChange("Varicella")}
              label="Varicella (ChickenPox)"
              placeholder="Varicella (ChickenPox)"
              select
              variant="outlined"
              fullWidth
            >
              {varicella.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              value={formData.MMR}
              onChange={handleChange("MMR")}
              label="MMR (Measles,Mumps, Rubella)"
              placeholder="MMR (Measles,Mumps, Rubella)"
              select
              variant="outlined"
              fullWidth
            >
              {mmr.map((opt) => (
                <MenuItem value={opt.name} label={opt.name}>
                  {opt.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              variant="outlined"
              label="Additional Immunization Notes"
              placeholder="Any other relevant immunization information "
              fullWidth
              multiline
              maxRows={3}
              value={formData.Additional}
              onChange={handleChange("Additional")}
            ></TextField>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ImmunizationHistory;
