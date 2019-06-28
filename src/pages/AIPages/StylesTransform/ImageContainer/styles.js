import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainRow: {
    display: "inline-flex",
    width: "80%"
  },
  tagButton: { margin: 10, cursor: "pointer" },
  transformation: ({ isTransform, inputID }) =>
    isTransform
      ? {
          transitionProperty: "opacity, margin-left, margin-right",
          transitionDuration: "2s",
          transitionTimingFunction: "ease-out",
          zIndex: inputID == "style-img" ? 10 : 20,
          marginRight: inputID == "style-img" ? "100%" : "",
          marginLeft: inputID != "style-img" ? "100%" : "",
          opacity: 0
        }
      : {
          position: "relative",
          transitionProperty: "opacity, margin-left, margin-right display",
          transitionDuration: "2s",
          transitionTimingFunction: "ease-out"
        }
});
// isTransform
