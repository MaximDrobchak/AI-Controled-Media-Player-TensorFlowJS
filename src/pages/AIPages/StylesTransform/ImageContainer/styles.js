import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(props => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainRow: {
    display: "flex",
    flexDirection: ({ inputID }) =>
      inputID == "style-img" ? "row-reverse" : "row",

    justifyContent: "space-between"
  },
  tagButton: { marginBottom: 10, cursor: "pointer" },
  transformation: ({ isTransform, inputID }) =>
    isTransform
      ? {
          transitionProperty: "opacity, margin-left, margin-right",
          transitionDuration: "2s",
          transitionTimingFunction: "ease-out",
          zIndex: inputID == "style-img" ? 10 : 20,
          marginLeft: inputID == "style-img" ? "-100%" : "0%",
          marginRight: inputID != "style-img" ? "-100%" : "0%",
          opacity: 0
        }
      : {
          position: "relative",
          transitionProperty: "opacity, margin-left, margin-right display",
          transitionDuration: "2s",
          transitionTimingFunction: "ease-out"
        }
}));
// isTransform
