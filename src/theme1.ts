import {
  darken,
  getContrast,
  lighten,
  saturate,
  shade,
  transitions,
  transparentize,
} from "polished";
import { Colors } from "./ColorsUtils";

export const getContrastingColor = (col: any) => {
  const contrastRatio = getContrast(col, "#fff");
  return contrastRatio <= 3 ? "#000" : "#fff";
};

export default {
  themeName: "Account",
  overrides: {
    MuiButton: {
      root: {
        background: "white",
        color: Colors.black,
        borderColor: Colors.black,
        "&:hover": {
          background: Colors.tealSw,
          color: "white",
          borderColor: Colors.tealSw,
        },
        "&:focus": {
          borderColor: darken(0.18, Colors.tealSw),
        },
        "&:active": {
          background: shade(0.15, Colors.tealSw),
          borderColor: shade(0.15, Colors.tealSw),
          color: "white",
        },
        "&[disabled]": {
          color: transparentize(0.5, Colors.tealSw),
        },
      },
      containedPrimary: {
        backgroundColor: Colors.black,
        color: "white",
        border: "1px solid" + Colors.black,
        "&:hover": {
          backgroundColor: Colors.blueSw,
          borderColor: Colors.blueSw,
        },
        "&[disabled]": {
          color: transparentize(0.1, "white"),
        },
      },
      containedSecondary: {
        backgroundColor: "white",
        borderColor: "white",
        color: "black",
        "&:hover": {
          color: "black",
          background: transparentize(0.5, "white"),
          borderColor: transparentize(0.5, "white"),
        },
        "&:focus": {
          borderColor: "white",
        },
        "&[disabled]": {
          color: transparentize(0.5, "white"),
        },
      },
      outlinedPrimary: {
        backgroundColor: "white",
        color: Colors.black,
        borderColor: Colors.black,
        "&:hover": {
          backgroundColor: Colors.tealSw,
          color: "white",
          borderColor: Colors.tealSw,
        },
        "&:focus": {
          borderColor: darken(0.18, Colors.tealSw),
        },
        "&[disabled]": {
          color: transparentize(0.5, Colors.black),
        },
      },
    },
  },
};
