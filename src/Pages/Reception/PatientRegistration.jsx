import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VisitInfo from "./VisitInfo";

const PatientRegistration = () => {
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
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    alert("Successfully submitted");
  };

  const renderActiveStep = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: "400" }}>
              <VisitInfo />
            </Typography>
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
            sx={{ bgcolor: "#5f5e5e", color: "#fff" }}
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
              sx={{ bgcolor: "#5f5e5e", color: "#fff" }}
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
