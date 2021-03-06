import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginTop: 0,
    marginBottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative"
  },
  slider: {
    transitionProperty: "opacity, margin-right, margin-left, position",
    transitionDuration: "2s",
    transitionTimingFunction: "ease-out",

    position: "relative",
    margin: "auto",
    width: "60%"
  },
  lable: {
    margin: 0,
    marginTop: 0,
    padding: 0,
    marginLeft: "28%"
  },
  transformation: {
    transitionProperty: "opacity, margin-right, margin-left, position",
    transitionDuration: "2s",
    transitionTimingFunction: "ease-out",

    zIndex: ({ isTransform }) => (isTransform ? 20 : 11),
    marginLeft: ({ isTransform }) => (isTransform ? "50%" : ""),
    opacity: ({ isTransform }) => (isTransform ? 0 : 1),
    position: ({ isTransform }) => (isTransform ? "absolute" : "relative"),
    display: "inline-block"
  },
  randomParam: {
    transitionProperty: "opacity, margin-right, margin-left, position",
    transitionDuration: "2s",
    transitionTimingFunction: "ease-out",
    zIndex: ({ isTransform }) => (isTransform ? 2 : 7),
    marginLeft: ({ isTransform }) => (isTransform ? "125%" : ""),
    opacity: ({ isTransform }) => (isTransform ? 0 : 1),
    position: ({ isTransform }) => (isTransform ? "absolute" : "absolute"),
    display: "inline-block"
  }
});
