import {
  Checkbox as MuiCheckox,
  CheckboxProps as MuiCheckboxProps,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Checked from "./Checked";
import Indeterminate from "./Indeterminate";
import Unchecked from "./Unchecked";

export interface CheckboxProps extends MuiCheckboxProps {}

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 1,
    width: 12,
    height: 12,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    "input:disabled ~ &": {
      boxShadow: "none",
    },
  },
  uncheckedIcon: {
    stroke: "#18A0FB",
    backgroundColor: "white",
    "input:hover ~ &": {
      backgroundColor: "#F1F1F1",
    },
    "input:disabled ~ &": {
      stroke: "#B2B2B2",
      backgroundColor: "#F1F1F1",
    },
  },
  checkedIcon: {
    fill: "#18A0FB",
    background: "white",
    "input:disabled ~ &": {
      fill: "#B2B2B2",
    },
  },
  indeterminateIcon: {
    background: "#18A0FB",
    fill: "white",
    boxShadow: "none",
    "input:disabled ~ &": {
      background: "#B2B2B2",
      fill: "#F1F1F1",
    },
  },
});

export const Checkbox = (props: CheckboxProps) => {
  const classes = useStyles();

  return (
    <MuiCheckox
      disableRipple
      className={classes.root}
      color='default'
      checkedIcon={
        <Checked className={clsx(classes.icon, classes.checkedIcon)} />
      }
      icon={<Unchecked className={clsx(classes.icon, classes.uncheckedIcon)} />}
      indeterminateIcon={
        <Indeterminate
          className={clsx(classes.icon, classes.indeterminateIcon)}
        />
      }
      {...props}
    />
  );
};
