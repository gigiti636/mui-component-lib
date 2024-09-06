import { o as l } from "./hook-B5tmXLea.mjs";
const m = (o) => ({
  ".react-multiple-carousel__arrow": {
    background: `rgba(130, 130, 130,${o.palette.mode === "dark" ? 0.5 : 0.1})`,
    minWidth: "20px",
    minHeight: "20px"
  },
  ".react-multiple-carousel__arrow--right:before": { color: l[600] },
  ".react-multiple-carousel__arrow--left:before": { color: l[600] },
  ".react-multi-carousel-dot button": { background: l[200], border: "none" },
  ".react-multi-carousel-dot--active button": { background: l[600], border: "none" }
}), h = (o) => o.palette.mode === "dark" ? "#353535" : "#EEEFF0", p = (o) => o.palette.mode === "dark" ? "rgba(179 ,168, 168 , 0.8)" : "rgba(0, 0, 0, 0.30)", b = {
  primary: {
    light: "#f3a34e",
    main: "#ff9018",
    dark: "#f87d02"
  },
  secondary: {
    light: "#ab92ee",
    main: "#6750a4",
    dark: "#4f2baf"
  },
  error: {
    light: "#f72b2b",
    main: "#c50e1f",
    dark: "#a80f22"
  },
  warning: {
    light: "#fcd37a",
    main: "#ffcc66",
    dark: "#ffbc27"
  },
  info: {
    light: "#4eccef",
    main: "#1ba0ce",
    dark: "#0066cc"
  },
  success: {
    light: "#4caf50",
    main: "#2e7d32",
    dark: "#1b5e20"
  },
  common: {
    black: "#000",
    white: "#fff"
  }
}, i = {
  values: {
    xs: 0,
    sm: 480,
    md: 810,
    lg: 1050,
    xl: 1400
  }
}, c = (o = "light") => {
  let a, r, e;
  return o === "dark" ? (a = "#6b6b6b", r = "#2b2b2b", e = "#959595") : (a = "#b2b1af", r = "#f1efef", e = "#959595"), {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${a} ${r}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: r
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: a,
            minHeight: 24,
            border: `2px solid ${r}`
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: e
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: e
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: e
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: r
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: o === "light" ? "#f7f7f7" : "",
          transition: "background-color, box-shadow",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: (t) => t.palette.action.hover,
            boxShadow: (t) => t.shadows[4]
          }
        }
      }
    },
    //theme.typography.fontsize * 1.1rem => 14px
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          borderRadius: "17px",
          fontSize: "0.88rem",
          fontWeight: 400,
          paddingRight: "30px;",
          paddingLeft: "30px;"
        }
      }
    }
  };
}, n = {
  borderRadius: 5
}, w = {
  palette: {
    mode: "light",
    background: {
      default: "#e2e6ee",
      paper: "#fbfbfb"
    },
    ...b,
    text: {
      primary: "#444141",
      secondary: "#6b6b6b",
      disabled: "#999"
    }
  },
  components: c("light"),
  shape: n,
  breakpoints: i
}, C = {
  palette: {
    mode: "dark",
    background: {
      default: "#09091c",
      paper: "#282c34"
    },
    ...b
  },
  components: c("dark"),
  shape: n,
  breakpoints: i
}, s = {
  primary: {
    light: "#ADDBFF",
    main: "#3A5CB4",
    dark: "#03387a"
  },
  secondary: {
    light: "#f5f8fa",
    main: "#F1F9FF",
    dark: "#E8EDF5"
  },
  error: {
    light: "#f72b2b",
    main: "#c50e1f",
    dark: "#a80f22"
  },
  warning: {
    light: "#fcd37a",
    main: "#ffcc66",
    dark: "#ffbc27"
  },
  info: {
    light: "#DDF1FF",
    main: "#096BDE",
    dark: "#0066cc"
  },
  success: {
    light: "#4caf50",
    main: "#2e7d32",
    dark: "#1b5e20"
  },
  common: {
    black: "#000",
    white: "#fff"
  }
}, d = {
  values: {
    xs: 0,
    sm: 480,
    md: 810,
    lg: 1050,
    xl: 1580
  }
}, u = (o = "light") => {
  let a, r, e;
  return o === "dark" ? (a = "#6b6b6b", r = "#2b2b2b", e = "#959595") : (a = "#b2b1af", r = "#f1efef", e = "#959595"), {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: o === "light" ? "linear-gradient(167deg, rgba(229, 237, 255, 0.15) 2.39%, rgba(241, 248, 255, 0.30) 22.83%, rgba(255, 255, 255, 0.16) 61.1%, rgba(255, 228, 193, 0.14) 81.54%), #F5F5F5" : "default",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          scrollbarColor: `${a} ${r}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: r
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: a,
            minHeight: 24,
            border: `2px solid ${r}`
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: e
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: e
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: e
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: r
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: o === "light" ? "#f7f7f7" : "",
          transition: "background-color, box-shadow",
          "&:hover": {
            backgroundColor: (t) => t.palette.action.hover,
            boxShadow: (t) => t.shadows[4]
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          borderRadius: "25px",
          fontSize: "0.88rem",
          fontWeight: 400,
          paddingRight: "30px;",
          paddingLeft: "30px;"
        }
      }
    }
  };
}, g = {
  //fontFamily: 'FontUp',
}, k = {
  borderRadius: 5
}, v = {
  palette: {
    mode: "light",
    background: {
      default: "#F7F7f8",
      paper: "#FEFEFE"
    },
    ...s,
    text: {
      primary: "#272930",
      // Dark gray
      secondary: "#757575",
      // Gray
      disabled: "#999"
      // Light gray
    }
  },
  components: u("light"),
  typography: g,
  shape: k,
  breakpoints: d
}, x = {
  palette: {
    mode: "dark",
    background: {
      paper: "#262626;"
    },
    ...s
  },
  components: u("dark"),
  typography: g,
  shape: k,
  breakpoints: d
};
export {
  w as a,
  x as b,
  v as c,
  h as d,
  p as e,
  m as g,
  C as t
};
