import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const bgColor = isHome ? (scrolled ? "#fff" : "transparent") : "#fff";
  const textColor = isHome ? (scrolled ? "#000" : "#fff") : "#000";
  const showCta = !isHome || scrolled;

  //logic for open current item and close pevious one
  const [openItems, setOpenItems] = useState({});
  const handleToggle = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const drawerItems = [
    {
      id: 1,
      text: "Dashboard",
      icon: <ContactsIcon />,
      children: [
        {
          id: 11,
          text: "Doctor Dashboard",
          path: "/dashboard/doctor",
        },
        { id: 12, text: "Nurse Dashboard", path: "/dashboard/nurse" },
        {
          id: 13,
          text: "Reception Dashboard",
          path: "/dashboard/reception",
        },
      ],
    },

    { id: 2, text: "Settings", icon: <SettingsIcon /> },
    { id: 3, text: "About", icon: <InfoIcon /> },
  ];

  return (
    <>
      <CssBaseline />

      <AppBar
        position="fixed"
        elevation={isHome && !scrolled ? 0 : 1}
        sx={{
          // zIndex: 1300,
          width: "100%",
          height: "10%",
          // backgroundColor: scrolled ? "#fff" : "transparent",
          // color: scrolled ? "#fff" : "#111",
          backgroundColor: bgColor,
          color: textColor,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left Part */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <IconButton
                edge="start"
                size="medium"
                onClick={() => setOpenDrawer(true)}
                // sx={{ color: scrolled ? "#111" : "#fff" }}
                sx={{ color: textColor }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 0,
                  margin: 0,
                  // color: scrolled ? "#111" : "#fff",
                  color: textColor,
                }}
              >
                <Typography
                  sx={{ variant: "h1", fontSize: "20px", fontWeight: 500 }}
                >
                  EHR
                </Typography>
                <Typography
                  sx={{ variant: "body1", fontSize: "12px", fontWeight: 500 }}
                >
                  Powered by HiPaas
                </Typography>
              </Box>
            </Box>

            {/* Middle Part */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                fontSize: "17px",
                fontWeight: "500",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button onClick={() => navigate("/")} sx={{ color: textColor }}>
                Home
              </Button>
              <Button sx={{ color: textColor }}>About Us</Button>
              <Button sx={{ color: textColor }}>Services</Button>
              <Button sx={{ color: textColor }}>Book an Appointment</Button>
              <Button
                sx={{
                  // color: scrolled ? "#fff" : "#fff",
                  color: showCta ? "#fff" : textColor,
                  marginLeft: "20px",
                  backgroundColor: showCta ? "#2d21d1" : "transparent",
                  borderRadius: showCta ? "3px" : "0px",
                  border: "none",
                  outline: "none",
                  padding: "5px 10px",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawerPaper": {
            marginTop: "70px",
            width: "250px",
            height: "calc(100%-64px)",
            color: "#fff",
            bgcolor: "#222",
          },
        }}
      >
        <Divider />
        <Box sx={{ width: "250px" }}>
          <List>
            {drawerItems.map((item, idx) => {
              return (
                <ListItem
                  key={item.id}
                  disablePadding
                  // component={Link}
                  // to={item.path}
                  sx={{
                    display: "block",
                    gap: 0,
                    marginRight: "1px",
                    padding: "0px",
                    color: "#111",
                  }}
                >
                  <ListItemButton
                    onClick={() => item.children && handleToggle(item.id)}
                    sx={[
                      {
                        minWidth: "120px",
                        minHeight: "30px",
                        px: 0,
                        marginRight: 0,
                        textWrap: "nowrap",
                        color: "#111",
                      },
                      openDrawer
                        ? { justifyContent: "initial" }
                        : { justifyContent: "center" },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          justifyContent: "center",
                          minWidth: "50px",
                          color: "#111",
                        },
                        openDrawer ? { mr: 0 } : { mr: "auto" },
                      ]}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={[openDrawer ? { opacity: 1 } : { opacity: 0 }]}
                    ></ListItemText>
                    {item.children && openItems[item.id] ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItemButton>
                  {/* //expand when it has children true and collapse -false */}
                  {item.children && (
                    <Collapse
                      in={openItems[item.id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List>
                        {item.children.map((child) => (
                          <ListItemButton
                            key={child.id}
                            component={Link}
                            selected={location.pathname === child.path}
                            to={child.path}
                            sx={{
                              marginLeft: "60px",
                              marginTop: 0,
                              padding: "2px 4px",
                            }}
                          >
                            <ListItemText primary={child.text}></ListItemText>
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
