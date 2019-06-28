import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 50
  },
  canvas: {
    maxHeight: 400,
    display: ({ isTransform }) => (isTransform ? "block" : "absolute"),
    position: ({ isTransform }) => (isTransform ? "absolute" : "absolute"),
    zIndex: ({ isTransform }) => (isTransform ? 9999 : ""),
    top: ({ isTransform }) => (isTransform ? 170 : ""),
    left: ({ isTransform }) => (isTransform ? "25%" : "")
  }
});
