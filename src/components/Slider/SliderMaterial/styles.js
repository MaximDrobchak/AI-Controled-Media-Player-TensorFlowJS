import { makeStyles, withStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";

export const useStyles = makeStyles({
  root: {
    height: 300,
    width: 50,

    left: ({ inputID }) => inputID !== "style-img" && -25,
    right: ({ inputID }) => inputID === "style-img" && -25
  },
  "@media (max-width:801.98px)": {
    root: {
      left: ({ inputID }) => inputID !== "style-img" && 25,
      right: ({ inputID }) => inputID === "style-img" && 25
    }
  }
});

export const marks = [
  {
    value: 0,
    label: "0%"
  },
  {
    value: 25,
    label: "25%"
  },
  {
    value: 50,
    label: "50%"
  },
  {
    value: 75,
    label: "75%"
  },
  {
    value: 100,
    label: "100%"
  }
];
export const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);
