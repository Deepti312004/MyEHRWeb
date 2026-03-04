import {
  Box,
  createTheme,
  Grid,
  MenuItem,
  TextField,
  Divider,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
// import Divider from "@mui/material/Divider";

const PatientDemograhic = ({formData, setFormData}) => {
  // const [value, setValue] = useState<null | HTMLInputElement>(null);
  // const [formData, setFormData] = useState({
  //   mrn: "MRN-2512-000001",
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   suffix: "",
  //   dob: "",
  //   age: "",
  //   gender: "",
  //   maritalStatus: "",
  //   prefferdLang: "",
  //   ssn: "",
  //   phone: "",
  //   homePhone: "",
  //   workPhone: "",
  //   email: "",
  //   address1: "",
  //   address2: "",
  //   city: "",
  //   state: "",
  //   postalCode: "",
  //   country: "",
  //   employer: "",
  //   officeEmp: "",
  // });
  // const handleChange = (field) => (event) => {
  //   setFormData({ ...formData, [field]: event.target.value });
  // };

   const handleChange=(field)=>(e)=>{
  setFormData((prev)=>({
    ...prev, [field]:e.target.value,
  }));  
  };

  const States = [
    { code: "MH", name: "Maharashtra" },
    { code: "DL", name: "Delhi" },
    { code: "KA", name: "Karnataka" },
    { code: "TN", name: "Tamil Nadu" },
    { code: "GJ", name: "Gujarat" },
    { code: "RJ", name: "Rajasthan" },
    { code: "UP", name: "Uttar Pradesh" },
    { code: "WB", name: "West Bengal" },
    { code: "KL", name: "Kerala" },
    { code: "TS", name: "Telangana" },
  ];

  const Country = [
    { code: "IN", name: "India" },
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "JP", name: "Japan" },
    { code: "CN", name: "China" },
    { code: "BR", name: "Brazil" },
  ];

  const lang = [
    { id: 1, name: "English" },
    { id: 2, name: "Spanish" },
    { id: 3, name: "Chinese" },
    { id: 4, name: "Tagalog" },
    { id: 5, name: "Korean" },
    { id: 6, name: "Others" },
  ];

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#1976d2",
  //     },
  //   },
  //   typography: {
  //     fontFamily: "sans-serif",
  //   },
  //   components: {
  //     MuiTextField: {
  //       styleOverrides: {
  //         root: {
  //           borderRadius: 8,
  //         },
  //       },
  //     },

  //     // MuiOutlinedInput:{
  //     //   styleOverrides:{
  //     //     root:{
  //     //       borderRadius:8,
  //     //       height:35,
  //     //     }

  //     //   }
  //     // }
  //   },
  // });

  return (
    <>
      <Box
        component="form"
        sx={{
          marginTop: "20px",
          padding: "10px 0px",

          borderRadius: "5px",
        }}
      >
        <Typography  variant="body1">Patient Demographics</Typography>
        <Box sx={{my:3}}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              placeholder="MRN-2425-000001"
              variant="outlined"
              label="MRN"
              value={formData.mrn}
              fullWidth
              inputProps={{ readOnly: true }}
              disabled
            ></TextField>
          </Grid>
          {/* <Grid size={{ xs: 12, md: 3 }}>
            <Box />
          </Grid> */}
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              required
              variant="outlined"
              label="First Name"
              value={formData.firstName}
              fullWidth
              onChange={handleChange("firstName")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              variant="outlined"
              label="Middle Name"
              value={formData.middleName}
              fullWidth
              onChange={handleChange("middleName")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              required
              variant="outlined"
              label="Last Name"
              value={formData.lastName}
              fullWidth
              onChange={handleChange("lastName")}
            ></TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <LocalizationProvider required dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={["DatePicker"]}>
                <DatePicker label="DD-MM-YYYY"  value={formData.dob}  />
              </DemoContainer> */}

              <DatePicker
                label="DD-MM-YYYY"
                onChange={(newValue) =>
                  // setFormData({ ...formData, dob: newValue })
                  setFormData((prev)=>({
...prev, dob:newValue?newValue.format("YYYY-MM-DD"):"",
                  }))
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Age"
              value={formData.age}
              onChange={handleChange("age")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              select
              variant="outlined"
              required
              fullWidth
              label="Gender"
              value={formData.gender ?? ""}
              onChange={handleChange("gender")}
              
            >
              {/* onChange={(newValue)=>setFormData({...FormData,gender:newValue})} slotProps={{textField:{fullWidth:true}}} */}
              <MenuItem value="Female" label="Female">
                Female
              </MenuItem>

              <MenuItem value="Male" label="Male">
                Male
              </MenuItem>
              <MenuItem value="Others" label="Others">
                Others
              </MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              select
              variant="outlined"
              fullWidth
              label="Marital Status"
              value={formData.maritalStatus ?? ""}
              onChange={handleChange("maritalStatus")}
            
            >
              <MenuItem value="Single" label="Single">
                Single
              </MenuItem>
              <MenuItem value="Married" label="Married">
                Married
              </MenuItem>
              <MenuItem value="Others" label="Others">
                Others
              </MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              select
              required
              fullWidth
              variant="outlined"
              label="Preferred language"
              value={formData.prefferedLang ?? ""}
              onChange={handleChange("prefferedLang")}
              
            >
              {lang.map((lan) => (
                <MenuItem value={lan.name} label={lan.name}>
                  {lan.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="SSN (Last 4 digit)"
              placeholder="XXX-XX-1234"
              value={formData.ssn}
              onChange={handleChange("ssn")}
            ></TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              required
              label="Mobile No"
              placeholder="404-555-1234"
              variant="outlined"
              type="tel"
              value={formData.phone}
              onChange={handleChange("phone")}
            ></TextField>
          </Grid>

          {/* <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Home Phone"
              placeholder="+91"
              variant="outlined"
              type="tel"
              value={formData.homePhone}
              onChange={handleChange("homePhone")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Work Phone"
              placeholder="+91"
              variant="outlined"
              type="tel"
              value={formData.workPhone}
              onChange={handleChange("workPhone")}
            ></TextField>
          </Grid> */}

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              type="email"
              fullWidth
              variant="outlined"
              label="Email"
              value={formData.email}
              onChange={handleChange("email")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <center>
              <Divider textAlign="center">Address Information</Divider>
            </center>
          </Grid>
          {/* <Grid size={{ xs: 12, md: 6 }}>
            <Box />
          </Grid> */}
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Address line 1"
              fullWidth
              variant="outlined"
              multiline
              rows={2}
              value={formData.address1}
              onChange={handleChange("address1")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Address line 2"
              fullWidth
              variant="outlined"
              multiline
              rows={2}
              value={formData.address2}
              onChange={handleChange("address2")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              variant="outlined"
              label="City"
              required
              fullWidth
              value={formData.city}
              onChange={handleChange("city")}
            ></TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              select
              fullWidth
              variant="outlined"
              label="State"
              value={formData.state ?? ""}
              onChange={handleChange("state")}
              
            >
              {States.map((state) => (
                <MenuItem value={state.name} label={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Zip Code"
              value={formData.postalCode}
              onChange={handleChange("postalCode")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              select
              variant="outlined"
              fullWidth
              label="Country"
              value={formData.country ?? ""}
              onChange={handleChange("country")}
              

            >
              {Country.map((country) => (
                <MenuItem value={country.name} label={country.name}>
                  {country.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <center>
              <Divider textAlign="center">Additional Information</Divider>
            </center>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Office Employee"
              label="Occupation"
              value={formData.officeEmp}
              onChange={handleChange("officeEmp")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Employer"
              value={formData.employer}
              onChange={handleChange("employer")}
            />
          </Grid>
        </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PatientDemograhic;
