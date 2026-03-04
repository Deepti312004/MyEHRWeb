import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VisitInfo from "./VisitInfo";
import PatientDemograhic from "./PatientDemographics";
import EmergencyContact from "./EmergencyContact";
import IdVerification from "./IdVerification";
import MedicalHistory from "./MedicalHistory";
import ImmunizationHistory from "./ImmunizationHistory";
import SocialHistory from "./SocialHistory";
import FamilyHistory from "./FamilyHistory";
import { useNavigate } from "react-router-dom";
const generateMRN=()=>`MRN-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`

const PatientRegistration = () => {
  const navigate=useNavigate();
  const steps = [
    "Visit Type",
    "Patient Demographics",
    "Emergency Contact",
    "Id Verification",
    "Medical History",
    "Social History",
    "Immunization History",
    "Family History",
  ];

  const[formData, setFormData]=useState({


   mrn: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    dob: "",
    age: "",
    gender: "",
    maritalStatus: "",
    prefferedLang: "",
    ssn: "",
    phone: "",
    homePhone: "",
    workPhone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    employer: "",
    officeEmp: "",
     status: "Registered",
   visitType:"",
   reasonForVisit:"",

 

  });

  
  useEffect(()=>{
  setFormData((prev)=>({
    ...prev, mrn:generateMRN(),
  }));
  },[]);

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
  if(!formData.firstName || ! formData.lastName){
     alert("First name and last name required"); 
     return;
  }
  const newPatient={
  id:Date.now(),
 patient:`${formData.firstName} ${formData.lastName}`, ...formData,

lastVisit:new Date().toLocaleDateString(),

};

const existing=JSON.parse(localStorage.getItem("receptionPatients")) || [];

localStorage.setItem("receptionPatients", JSON.stringify([...existing, newPatient]))
alert("Patient RegisteredSuccessfully");
navigate("/dashboard/reception");
   // alert("Successfully submitted");
  };



  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <VisitInfo formData={formData} setFormData={setFormData}/>
          </Box>
        );
      case 1:
        return (
          <Box>
            {/* <Typography sx={{ fontSize: "20px", fontWeight: "400" }}> */}
            <PatientDemograhic formData={formData} setFormData={setFormData} />
            {/* </Typography> */}
          </Box>
        );
      case 2:
        return (
          <Box>
            <EmergencyContact />
          </Box>
        );

      case 3:
        return (
          <Box>
            <IdVerification />
          </Box>
        );

        case 4:
          return(
            <Box>
              <MedicalHistory/>
            </Box>
          );
          case 5:
            return(
              <Box>
                    <SocialHistory/>
      
              </Box>
            );
            case 6:
              return(
                <Box>
                      <ImmunizationHistory/>
                </Box>
              );
              case 7:
                return(
                <Box>
                    <FamilyHistory/>
                </Box>
              );
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ mt: "100px", px: "4%" }}>
        <Typography variant="h6">Patient Registration</Typography>
        <Box sx={{ my: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, idx) => {
              return (
                <Step key={idx}>
                  <StepLabel
                    cursor="pointer"
                    onClick={() => setActiveStep(idx)}
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        <Box>{renderActiveStep(activeStep)}</Box>
        <Box
          sx={{ my: "4%", display: "flex", justifyContent: "space-between" }}
        >
          <Button
            variant="contained"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ bgcolor: "#056aad", color: "#fff" }}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ bgcolor: "#035a1d", color: "#fff" }}
            >
              Complete Ragistration
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ bgcolor: "#056aad", color: "#fff" }}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PatientRegistration;
