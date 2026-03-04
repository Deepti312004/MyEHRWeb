import { Box , Button, Grid, MenuItem, TextField, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { PickersLayoutContentWrapper } from "@mui/x-date-pickers";

import SaveIcon from "@mui/icons-material/Save";

const ScheduleAppointment = () => {
    const [formData, setformData] = useState({
    patientId: "",
    visitCategory: "",
    class: "",
    type: "",
    sensitivity: "",
    encounterProvider: "",
    referringProvider: "",
    facility: "",
    billingFacility: "",
    dateOfService: "",
    hospDate: "",
    inCollection: "",
    dischargeDisposition: "",
    reasonVisit: "",
  });

  const handleChange = (field) => (event) => {
    setformData({ ...formData, [field]: event.target.value });
  };

  const visitors = [
    { id: 1, category: "Inpatient" },
    { id: 2, category: "Outpatient" },
    { id: 3, category: "Emergency" },
    { id: 4, category: "UrgentCare" },
    { id: 5, category: "Telemedicine" },
  ];

  const classes = [
    { id: 1, category: "Inpatient" },
    { id: 2, category: "Outpatient" },
    { id: 3, category: "Ambulatory" },
    { id: 4, category: "Emergency" },
  ];

  const types = [
    { id: 1, category: "New Patient" },
    { id: 2, category: "Follow-Up" },
    { id: 3, category: "Consultation" },
    { id: 4, category: "Procedure" },
    { id: 5, category: "Telemedicine" },
  ];

  const sensitivity = [
    { id: 1, category: "Normal" },
    { id: 2, category: "Restricted" },
    { id: 3, category: "Confidential" },
  ];

  const providers = [
    { id: 1, name: "Dr. Amanda Santos" },
    { id: 2, name: "Dr. Roberto Lim" },
    { id: 3, name: "Dr. Jaime Ramos" },
  ];

  const facility = [
    { id: 1, name: "Makati Medical Center" },
    { id: 2, name: "Asian Hospital" },
    { id: 3, name: "St. Luke's Medical Center" },
  ];

  const billingFacility = [
    { id: 1, name: "Makati Medical Center" },
    { id: 2, name: "Asian Hospital" },
    { id: 3, name: "St. Luke's Medical Center" },
  ];

  const inCollection = [
    { id: 1, name: "No" },
    { id: 2, name: "Yes" },
  ];

  const discharge = [
    { id: 1, name: "--Select One--" },
    { id: 2, name: "Home" },
    { id: 3, name: "SNF" },
    { id: 4, name: "Rehab" },
    { id: 5, name: "Hospice" },
    { id: 6, name: "AMA" },
    { id: 7, name: "Expired" },
  ];

  const handleSave = () => {
    alert("Details saved");
  };
  return (
    <>

     <Box sx={{mt:"100px", px:"4%"}}>
<Typography  variant="h6">Schedule Appointment</Typography>
<Box sx={{my:4}}>
   <Grid container>
              <Grid size={{ xs: 12, md: 12 }}>
                <TextField
                  sx={{ margin: "15px 25px" }}
                  variant="outlined"
                  fullWidth
                  value={formData.patientId}
                  label="Search by Patient Id or Name"
                  placeholder="Enter Patient Id or Name"
                  onChange={handleChange("patientId")}
                ></TextField>
              </Grid>
            </Grid>
  </Box>

  <Box
          sx={{
            backgroundColor: "#fff ",
            width: "100%",
            marginTop: "20px ",
            padding: "0px 15px",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ padding: "30px" }}>
            <Typography
              variant="body2"
              textAlign="center"
              sx={{
                padding: "20px",
                margin: "auto",

                width: "60%",
                backgroundColor: "#ebe8e8",
              }}
            >
              Please select a patient to schedule a visit{" "}
            </Typography>
            <Box component="form" sx={{ marginTop: "40px" }}>
              <Grid container rowSpacing={4} columnSpacing={3}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Visit Category"
                    placeholder="Visit Category"
                    value={formData.visitCategory}
                    onChange={handleChange("visitCategory")}
                  >
                    {visitors.map((visit) => (
                      <MenuItem value={visit.category} label={visit.category}>
                        {visit.category}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Class"
                    placeholder="Class"
                    value={formData.class}
                    onChange={handleChange("class")}
                  >
                    {classes.map((clas) => (
                      <MenuItem value={clas.category} label={clas.category}>
                        {clas.category}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleChange("type")}
                  >
                    {types.map((type) => (
                      <MenuItem value={type.category} label={type.category}>
                        {type.category}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Sensitity"
                    placeholder="Sensitivity"
                    value={formData.sensitivity}
                    onChange={handleChange("sensitivity")}
                    info="Sensitivity level determines who can access this encounter"
                  >
                    {sensitivity.map((type) => (
                      <MenuItem value={type.category} label={type.category}>
                        {type.category}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Encounter Provider"
                    placeholder="Encounter Provider"
                    value={formData.encounterProvider}
                    onChange={handleChange("encounterProvider")}
                  >
                    {providers.map((doc) => (
                      <MenuItem value={doc.name} label={doc.name}>
                        {doc.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    // name="Referring Provider"
                    label="Referring Provider"
                    placeholder="No available Providers"
                    value={formData.referringProvider}
                    onChange={handleChange("referringProvider")}
                    disabled
                  ></TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Facility"
                    placeholder="Facility"
                    value={formData.facility}
                    onChange={handleChange("facility")}
                  >
                    {facility.map((med) => (
                      <MenuItem value={med.name} label={med.name}>
                        {med.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Billing Facility"
                    placeholder="Billing Facility"
                    value={formData.billingFacility}
                    onChange={handleChange("billingFacility")}
                  >
                    {billingFacility.map((med) => (
                      <MenuItem value={med.name} label={med.name}>
                        {med.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    fullWidth
                    // name="Referring Provider"
                    // label="Date of Service"
                    value={formData.dateOfService}
                    onChange={handleChange("dateOfService")}
                    type="datetime-local"
                  ></TextField>
                </Grid> */}
                <Grid size={{ xs: 12, md: 3 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      // value={formData.dateOfService}
                      label="mm/dd/yyyy --:-- --"
                      onChange={(newval) =>
                        setformData({ ...formData, dateOfService: newval })
                      }
                      slotProps={{ textField: { fullWidth: true } }}
                    ></DateTimePicker>
                  </LocalizationProvider>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      // value={formData.dateOfService}
                      label="mm/dd/yyyy "
                      onChange={(newval) =>
                        setformData({ ...formData, hospDate: newval })
                      }
                      slotProps={{ textField: { fullWidth: true } }}
                    ></DatePicker>
                  </LocalizationProvider>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="In Collection"
                    placeholder="In Collection"
                    value={formData.inCollection}
                    onChange={handleChange("inCollection")}
                  >
                    {inCollection.map((collect) => (
                      <MenuItem value={collect.name} label={collect.name}>
                        {collect.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}></Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    label="Discharge Disposition"
                    placeholder="Discharge Disposition"
                    value={formData.dischargeDisposition}
                    onChange={handleChange("dischargeDisposition")}
                  >
                    {discharge.map((ele) => (
                      <MenuItem value={ele.name} label={ele.name}>
                        {ele.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    label="Reason for Visit"
                    placeholder="Reason for Visit"
                    value={formData.reasonVisit}
                    onChange={handleChange("reasonVisit")}
                  ></TextField>
                </Grid>
              </Grid>

              <Box sx={{ marginTop: "40px", width: "200px", height: "100px" }}>
                <Button
                  variant="contained"
                  startIcon={<SaveIcon />}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
</Box>
    </>
  );
};

export default ScheduleAppointment;
