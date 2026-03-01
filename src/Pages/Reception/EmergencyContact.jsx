import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const EmergencyContact = () => {
  const [formData, setFormData] = useState({
    emergContactName: "",
    emergContactPhone: "",
    emergContactRelation: "",
    emergContactAddress: "",
  });
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const relation = [
    { value: "Parent", label: "Parent" },
    { value: "Sibling", label: "Sibling" },
    { value: "Child", label: "Child" },
    { value: "Spouse", label: "Spouse" },
    { value: "Friend", label: "Friend" },
    { value: "Guardian", label: "Guardian" },
    { value: "Spouse", label: "Spouse" },
  ];

  return (
    <>
      <Box component="form">
        
         <Typography  variant="body1">Emergency Contact</Typography>
        <Box sx={{my:3}}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              variant="outlined"
              label="Emergency Conatct Name"
              placeholder="Emily Smith"
              value={formData.emergContactName}
              onChange={handleChange("emergContactName")}
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              variant="outlined"
              type="tel"
              placeholder="404-555-1013"
              label="Emergency Conatct Phone"
              value={formData.emergContactPhone}
              onChange={handleChange("emergContactPhone")}
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              variant="outlined"
              label="Relationship to Patient"
              fullWidth
              value={formData.emergContactRelation}
              onChange={handleChange("emergContactRelation")}
              required
            >
              {relation.map((rel) => (
                <MenuItem value={rel.value}>{rel.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              label="Emergency Contact Address(Optional)"
              value={formData.emergContactAddress}
              onChange={handleChange("emergContactAddress")}
            ></TextField>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default EmergencyContact;
