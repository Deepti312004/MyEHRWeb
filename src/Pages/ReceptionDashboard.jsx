import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme

ModuleRegistry.registerModules([AllCommunityModule]);

const ReceptionDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    {
      label: "Today's Date",
      value: new Date().toLocaleDateString(),
      icon: <CalendarTodayIcon />,
    },
    { label: "Registered Patients", value: 150, icon: <PersonAddIcon /> },
    { label: "Total Schedules", value: 24, icon: <BookOnlineIcon /> },
    { label: "Triage", value: 5 },
    { label: "Ready for Consultation", value: 8 },
  ];

  const [filterName,setFilterName]=useState("");
  const [filterId, setFilterId]=useState("");
  const [filterVisitType, setFilterVisitType]=useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [rowData, setRowData]=useState([]);
   const [columnDefs, setColumnDefs] = useState([
      { headerName: "Patient", field: "patient", flex: 1 },
      { headerName: "MRN", field: "mrn", flex: 1 },
      { headerName: "Visit Type", field: "visitType", flex: 1 },
      { headerName: "Status", field: "status", flex: 1 },
      { headerName: "City", field: "city", flex: 1 },
      { headerName: "Last Visit", field: "lastVisit", flex: 1 },
    ]);

     const defaultColDef = useMemo(() => {
        return {
          flex: 1,
          filter: true,
          // editable: true,
        };
      });
      const mytheme = themeQuartz.withParams({
        headerBackgroundColor: "rgb(41, 39, 48)",
        rowHoverColor: "rgb(192, 191, 194)",
        // headerForegroundColor: "rgb(255, 255, 255)",
        headerTextColor: "#fff",
      });
      
      const pagination = true;
      const paginationPageSize = 5;
      const paginationPageSizeSelector = [5, 10, 15];

      // useEffect(()=>{
      //   try{
      //     const stored=JSON.parse(localStorage.getItem("receptionPatients"));
      //     if(stored){
      //       const parsed=JSON.parse(stored);
      //       setRowData(Array.isArray(parsed) ? parsed : []);
      //       setFilteredRows(Array.isArray(parsed) ? parsed : []);
      //     }
      //     else{
      //       setRowData([]);
      //       setFilteredRows([]);
      //     }

      //   }
      //   catch(e)
      //   {
      //       console.error("Invalid JSON.");
      //       localStorage.removeItem("receptionPatients");
      //       setRowData([]);
      //       setFilteredRows([]);
      //   }
  
      // },[]);

      useEffect(() => {
  try {
    const stored = localStorage.getItem("receptionPatients");

    if (!stored) {
      setRowData([]);
      setFilteredRows([]);
      return;
    }

    const parsed = JSON.parse(stored);
    console.log(parsed,"lkjhgf")
    if (Array.isArray(parsed)) {
      setRowData(parsed);
      setFilteredRows(parsed);
    } else {
      setRowData([]);
      setFilteredRows([]);
    }
  } catch (error) {
    console.error("Invalid JSON in localStorage");
    localStorage.removeItem("receptionPatients");
    setRowData([]);
    setFilteredRows([]);
  }
}, []);

useEffect(()=>{
  const filtered=rowData.filter((row)=>{
    const matchesName=filterName?
    row.patient.toLowerCase().includes(filterName.toLowerCase()):true;
    // row.mrn.toLowerCase().includes(filterId.toLowerCase()):true;
  //   :true;
  // const matchesId=filterId? row.mrn.toLowerCase().includes(filterId.toLowerCase()):true;

  const matchesVisit=filterVisitType?
  row.visitType===filterVisitType:true;

   const matchesStatus = filterStatus
      ? row.status === filterStatus
      : true;

      return matchesName && matchesVisit && matchesStatus;
  });
  setFilteredRows(filtered);

},[rowData, filterName, filterVisitType, filterStatus]);

  return (
    <>
      <Box
        sx={{
          margin: "100px 20px",
          paddingLeft: { xs: "1%", md: "3%" },
          paddingRight: { xs: "1%", md: "3%" },
        }}
      >
        <Typography variant="h6">Reception Dashboard</Typography>

        {/* Reception Status */}
        <Box sx={{ paddingLeft: "3%", marginTop: "30px" }}>
          <Grid container spacing={3}>
            {stats.map((item, idx) => (
              <Grid size={{ xs: 12, md: 3 }}>
                <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                  <CardContent sx={{ position: "relative" }}>
                    {/* <PersonAddIcon
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "primary.light",
                      }} 
                    />*/}
                    <Typography
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "primary.light",
                      }}
                    >
                      {item.icon}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {item.label}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* //Quick Actions */}
        <Card sx={{ my: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Actions
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={() => navigate("/dashboard/reception/registration")}
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  Register Patient
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={() => navigate("/dashboard/reception/patientList")}
                  fullWidth
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  View Patient List
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  onClick={() => navigate("/dashboard/reception/schedule")}
                  fullWidth
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  Schedule Appointments
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  fullWidth
                  sx={{
                    transition: "transform 0.2s ease",
                    backgroundColor: "#3b3b3b",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1229f7",
                      color: "#fff",
                      transform: "translateY(-4px)",
                    },
                  }}
                  variant="contained"
                >
                  Manage Triage
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Apply Status */}
        <Card sx={{ my: 4 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Search Patient
            </Typography>
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={filterName}
                  onChange={(e)=>setFilterName(e.target.value)}
                  label="Search by Patient name or Id"
                  placeholder=" Patient name/id"
                />
              </Grid>
              <Grid sx={{ xs: 12, md: 4 }}>
                <TextField
                  variant="outlined"
                  select
                  fullWidth
                  label="Visit Type"
                  value={filterVisitType}
                  onChange={(e)=>setFilterVisitType(e.target.value)}
                >
                  <MenuItem value="New Visit" label="New visit">
                    New Visit
                  </MenuItem>
                  <MenuItem value="Walk-In" label="Walk In">
                    Walk In
                  </MenuItem>
                  <MenuItem value="Emergency" label="Emergency">
                    Emergency
                  </MenuItem>
                  <MenuItem value="Follow Up" label="Follow Up">
                    Follow Up
                  </MenuItem>
                  <MenuItem value="TeleHealth" label="TeleHealth">
                    TeleHealth
                  </MenuItem>
                  <MenuItem value="Lab Review Only" label="Lab Review Only">
                    Lab Review Only
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid sx={{ xs: 12, md: 4 }}>
                <TextField variant="outlined" select fullWidth label="Status" value={filterStatus} onChange={(e)=>setFilterStatus(e.target.value)}>
                  <MenuItem value="Registered" label="Registered">
                    Registered
                  </MenuItem>
                  <MenuItem value="Schedulled" label="Schedulled">
                    Schedulled
                  </MenuItem>
                  <MenuItem value="Ready for triage" label="Ready for triage">
                    Ready for triage
                  </MenuItem>
                  <MenuItem
                    value="Ready for Consultation"
                    label="Ready for Consultation"
                  >
                    Ready for Consultation
                  </MenuItem>
                  <MenuItem value="Completed" label="Completed">
                    Completed
                  </MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box className="w-full " style={{height:400}}>
          <AgGridReact rowData={filteredRows} columnDefs={columnDefs}
          defaultColDef={defaultColDef} theme={mytheme} pagination={pagination}
          paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector}>

          </AgGridReact>
        </Box>
      </Box>
    </>
  );
};

export default ReceptionDashboard;
