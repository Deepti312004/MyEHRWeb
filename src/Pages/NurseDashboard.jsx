import { Box, CardContent, Typography,Grid, Card } from "@mui/material";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const NurseDashboard = () => {
  const stats=[
    {label:"Today's Date", value: new Date().toLocaleDateString(), icon:<CalendarTodayIcon/>},
    {label:"Total Schedules", value:10, icon:<BookOnlineIcon/>},
    {label:"Triage", value:2},
    {label:"Ready for Consultation", value:2},
  ];
  return (
    <>
  
      <Box
            sx={{
              margin: "100px 20px",
              paddingLeft: { xs: "1%", md: "3%" },
              paddingRight: { xs: "1%", md: "3%" },
            }}
          >
            <Typography variant="h6">Nurse Dashboard</Typography>
            <Box sx={{paddingLeft:"3%", marginTop:"30px",width:"100%"}}>
              
                 <Grid container spacing={3}>
                  {stats.map((stat,idx)=>(
<Grid size={{xs:12, md:3}}>
  <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
<CardContent sx={{position:"relative"}}>
<Typography sx={{position:"absolute", top:8, right:8,color:"primary"}}>{stat.icon}</Typography>
<Typography variant="subtitle2" color="text.secondary">{stat.label}</Typography>
<Typography variant="h6" sx={{ fontWeight: 600 }}>{stat.value}</Typography>
</CardContent>
</Card>
</Grid>

 ))}
               </Grid>

            </Box>

          <Card sx={{my:6}}>
<CardContent>
  <Typography variant="h6" sx={{mb:3}}>Manage Triage</Typography>

</CardContent>
          </Card>
            </Box>
            
    </>
  );
};

export default NurseDashboard;
