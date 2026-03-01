import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MedicalHistory = () => {
  const [formData, setFormData] = useState({
    // primaryCare: "",
    // allergies: "",
    // currentMedications: "",
    // medicalConditions: "",
    // surgicalHistory: "",
    // familyHistory: "",
    // socialHistory: "",
    chronicConditions: "",
    pastIllness: "",
    pastSurgeries: "",
    regularMedications: "",
    allergies: "",
  });
  const handleChange = (field) => (event) =>
    setFormData({ ...formData, [field]: event.target.value });

  return (
    <Box component="form">
        <Typography variant="body1">Medical History</Typography>
        <Box sx={{my:3}}>
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            label="Chronic Conditions (Write 'None' if no chronic conditions)"
            rows={3}
            value={formData.chronicConditions}
            onChange={handleChange("chronicConditions")}
            placeholder="Eg. Diabetes,Asthama, Hypertension,etc."
            fullWidth
            size="medium"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            rows={3}
            label="Past Illness"
            placeholder="Eg. Occasional flu/cold, Mild cold"
            value={formData.pastIllness}
            onChange={handleChange("pastIllness")}
            size="medium"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            label="Past Surgeries"
            fullWidth
            rows={3}
            placeholder="List of all past surgeries and date (Write 'None' if no surgeries)"
            value={formData.pastSurgeries}
            onChange={handleChange("pastSurgeries")}
            size="medium"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            label="Regular Medications"
            fullWidth
            rows={3}
            placeholder="List of all regular medications with dosage (Write'None' if no regular medications)"
            value={formData.regularMedications}
            onChange={handleChange("regularMedications")}
            size="medium"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            label="Allergies"
            fullWidth
            rows={3}
            placeholder="Penicillin, Asperin (Write 'None' if no allergies)"
            value={formData.allergies}
            onChange={handleChange("allergies")}
            size="medium"
          ></TextField>
        </Grid>
        {/* <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            label="Family History"
            fullWidth
            multiline
            rows={3}
            placeholder="List of Family Medical History, if any"
            value={formData.familyHistory}
            onChange={handleChange("familyHistory")}
            size="medium"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            label="Social History"
            fullWidth
            multiline
            rows={3}
            placeholder="List of Social History, if any"
            value={formData.socialHistory}
            onChange={handleChange("socialHistory")}
            size="medium"
          ></TextField>
        </Grid> */}
      </Grid>
      </Box>
    </Box>
  );
};

export default MedicalHistory;
