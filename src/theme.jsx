import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontSize: "0.75rem",
          height: "40px",
        },
        input: {
          marginTop: 0,
          padding: "8px 15px",
          textAlign: "left",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          boxSizing: "border-box",
          fontSize: "0.75rem",
          height: "40px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          marginTop: 0,
          height: "30px",
          padding: "5px 15px",
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
          width: "100%",
          minWidth: "300px",
        },
        icon: {
          top: "calc(50%-0.5em)",
        },
        defaultProps: {
          MenuProps: {
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              verical: "top",
              horizontal: "left",
            },
          },
        },
      },
    },
    MuiSelectOutlined: {
      styleOverrides: {
        select: {
          paddingRight: "5px",
          paddingLeft: "5px",
        },
      },
      defaultProps: {
        MenuProps: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.80rem",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.80rem",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.80rem",
        },
      },
    },
  },
});
