import { Box, Typography , Button, Grid} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme

ModuleRegistry.registerModules([AllCommunityModule]);
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PatientList = () => {

  const [rowData, setRowData]=useState([]);
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState(null);
  const navigate=useNavigate();

    const handleDownload = () => {
    alert("Downloaded");
  };

  const handlePrint = () => {
    alert("Handle Print");
  };

const randomDate=()=>{
  const daysAgo=Math.floor(Math.random()*180);
  const date=new Date();
  date.setDate(date.getDate()-daysAgo);
 return date.toLocaleDateString();
};

 const randomMRN=()=>{
  return `MRN-${Math.floor(100000 + Math.random() * 900000)}`
};


const randomState=()=>{
  const states= ["CA", "NY", "TX", "FL", "IL", "WA", "MA", "AZ", "OH", "GA"];
  return states[Math.floor(Math.random()* states.length)];

};

const visitType=["New Patient", "Walk In","Emergency", "Follow Up", "TeleHealth", "Lab Review Only"];
const status=["Registered", "Schedulled", "Ready for triage", "Ready for Consultation", "Completed"];

// const randomVisitType = () =>
//   visitTypes[Math.floor(Math.random() * visitTypes.length)];

// const randomStatus = () =>
//   statuses[Math.floor(Math.random() * statuses.length)];

  // useEffect(()=>{
  //   const fetchPatients=async()=>{
  //     try{
  //       setLoading(true);
  //       setError(null);
  //       const res=await fetch("https://jsonplaceholder.typicode.com/users");
  //       if(!res.ok) throw new Error("Failed to fetch data");
  //       const data=await res.json();
  //       console.log(data);

  //       const filteredData=data.map((item)=>({
  //         id:item.id,
  //         lastVisit:randomDate(),
  //         patientname:item.name,
  //         mrn:randomMRN(),
  //         street: item.address.street,
  //       city: item.address.city,
  //       state: randomState(),
  //       zip: item.address.zipcode,
  //       home: item.phone,


  //       }));
  //       setRowData(filteredData);

  //     }
  //     catch(e)
  //     {
  //       setError(e.message);

  //     }
  //     finally{
  //       setLoading(false);

  //     }

  //   }
  //   fetchPatients();

  // },[]);

  useEffect(()=>{
try{
  const stored=localStorage.getItem("receptionPatients");
  if(!stored)
  {
    setRowData([]);
    return;
  }
  const parsed=JSON.parse(stored);
  if(Array.isArray(parsed))
  {
    setRowData(parsed); 
  }
  else{
     setRowData([]);
  }
}
catch(e){
console.log("Invalis JSON");
setRowData([]);
}
  },[]);
  const [colDefs, setColdefs] = useState([
    // { headerName: "Last Visit", field: "lastVisit", flex: 1 },
    { headerName: "Patient Name", field: "firstName", flex: 1 },
    { headerName: "MRN", field: "mrn", flex: 1 },
    { headerName: "Country", field: "country", flex: 1 },
    { headerName: "City", field: "city", flex: 1 },
    { headerName: "State", field: "state", flex: 1 },
    { headerName: "Zip", field: "postalCode", flex: 1 },
    { headerName: "Phone", field: "phone", flex: 1 },
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




  return (<>
  <Box sx={{mt:"100px", px:"4%"}}>
<Typography  variant="h6">Patient List</Typography>
<Box sx={{my:4}}>
  <Box sx={{display:"flex", justifyContent:"flex-start", gap:2, marginTop:"30px"}}>
      <Button
            sx={{ fontSize: "12px", fontWeight: "500" }}
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
          >
            Download
          </Button>
          <Button
            sx={{ fontSize: "12px", fontWeight: "500" }}
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
          >
            Print
          </Button>

          <Button
            sx={{ fontSize: "12px", fontWeight: "500" }}
            variant="contained"
            startIcon={<PersonAddIcon />}
            //try to use either of the method that is component={Link}  or onClick={} 
            //if both used then it gets cancelled
            // component={Link} 
            //   to="/newRegister"
            //   onClick={() => navigate(pageLink.receptionRegistration)}
            onClick={() =>{ 
              console.log("registered");
              navigate("/dashboard/reception/registration")}}
          >
            Create New Patient
          </Button>
  </Box>
  <Box  sx={{marginTop:"30px", height:"300px", width:"100%"}}>
    <AgGridReact className="w-full" theme={mytheme} rowData={rowData}
    columnDefs={colDefs} defaultColDef={defaultColDef} pagination={pagination} paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector}>
      

    </AgGridReact>


  </Box>
</Box>
  </Box>
  </>
  );
};

export default PatientList;
