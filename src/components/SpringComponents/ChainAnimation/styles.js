import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    padding: 20,
    boxSizing: "border-box"
  },
  slideBar: {
    position: "relative",
    display: "flex",
    minWidth: 500,
    padding: 20,
    boxSizing: "border-box",
    boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
    background: "white",
    willChange: "width, height",
    transitionDuration: "1s",
    transitionTimingFunction: "ease-out",
    borderRadius: 5
  }
});
