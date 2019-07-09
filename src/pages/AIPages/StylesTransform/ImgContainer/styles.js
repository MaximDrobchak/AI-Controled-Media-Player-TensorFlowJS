import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "row"
  },
  mainRow: {
    display: "inline-flex",
    width: "100%",
    border: "1px solid red",
    height: 30
  },
  slider: {
    width: 55,
    height: 400,
    margin: 0,
    padding: 0,
    border: "1px solid green",
    position: "relative"
  },
  caruselImage: {
    width: "100%",
    height: 55,
    margin: 0,
    padding: 0,
    border: "1px solid green",
    position: "relative"
  },

  tagButton: { margin: "0 10px 0 10px", cursor: "pointer" },
  transformation: ({ isTransform, inputID }) =>
    isTransform
      ? {
          transitionProperty: "opacity, margin-left, margin-right",
          transitionDuration: "2s",
          transitionTimingFunction: "ease-out",
          zIndex: inputID == "style-img" ? 10 : 20,
          marginRight: inputID == "style-img" ? "100%" : "",
          marginLeft: inputID != "style-img" ? "100%" : "",
          opacity: 0,
          minHeight: 500
        }
      : {
          border: "1px solid blue",
          minHeight: 500,
          // left: 0,
          position: "relative",
          display: "flex",
          flexDirection: "column",

          transitionProperty: "opacity, margin-left, margin-right display",
          transitionDuration: "2s",
          transitionTimingFunction: "ease-out"
        }
});
// isTransform
