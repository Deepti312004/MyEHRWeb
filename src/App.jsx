import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import ReceptionDashboard from "./Pages/ReceptionDashboard";
import DoctorDashboard from "./Pages/DoctorDashboard";
import NurseDashboard from "./Pages/NurseDashboard";
import PatientRegistration from "./Pages/Reception/PatientRegistration";
import PatientList from "./Pages/Reception/PatientList";
import ScheduleAppointment from "./Pages/Reception/ScheduleAppointment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/dashboard/reception"
              element={<ReceptionDashboard />}
            ></Route>
            <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
            <Route path="/dashboard/nurse" element={<NurseDashboard />} />

            <Route
              path="/dashboard/reception/registration"
              element={<PatientRegistration />}
            ></Route>
            <Route
              path="/dashboard/reception/patientList"
              element={<PatientList />}
            ></Route>
            <Route
              path="/dashboard/reception/schedule"
              element={<ScheduleAppointment />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
