import { useTheme as e, useMediaQuery as o } from "@mui/material";
const n = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
function t() {
  const f = e();
  return o(f.breakpoints.down("md"));
}
function a() {
  const f = e();
  return o(f.breakpoints.down("xl")) ?? !1;
}
export {
  t as a,
  n as o,
  a as u
};
