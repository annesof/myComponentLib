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
// Create your own theme like this.
// Note: you can specify theme name in themeName field. Otherwise it will be displayed by the number.
// you can specify only required fields overriding the Light Base Theme
export default {
  themeName: "Other",
  overrides: {
    MuiButton: {
      root: {
        background: "white",
        borderRadius: "20px",
        color: Colors.black,
        borderColor: Colors.black,
        boxShadow: "none",
        lineHeight: 1.65,
        padding: "3px 13px 3px 19px",
        ...transitions(
          ["background", "borderColor"],
          "250ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
        ),
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
      outlinedSizeSmall: {
        padding: "3px 11px 3px 15px",
        borderRadius: "20px",
        margin: "0px 6px 0px 6px",
      },
      outlinedSizeLarge: {
        padding: "7px 21px 7px 25px",
        borderRadius: "20px",
      },
      containedSizeSmall: {
        padding: "3px 11px 3px 15px",
        borderRadius: "20px",
        margin: "0px 6px 0px 6px",
      },
      containedSizeLarge: {
        padding: "7px 21px 7px 25px",
        borderRadius: "20px",
      },
      containedPrimary: {
        backgroundColor: "blue",
        borderColor: Colors.black,
        color: "white",
        "&:hover": {
          background: Colors.blueSw,
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
          background: Colors.tealSw,
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
      iconSizeSmall: {
        "&>*:first-child": {
          fontSize: "14px",
        },
      },
      iconSizeMedium: {
        "&>*:first-child": {
          fontSize: "16px",
        },
      },
      iconSizeLarge: {
        "&>*:first-child": {
          fontSize: "18px",
        },
      },
      endIcon: {
        "&.MuiButton-iconSizeSmall": {
          marginLeft: "4px",
        },
        "&.MuiButton-iconSizeMedium": {
          marginLeft: "6px",
        },
        "&.MuiButton-iconSizeLarge": {
          marginLeft: "8px",
        },
      },
    },
  },
};
