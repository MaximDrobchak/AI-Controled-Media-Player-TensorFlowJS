import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 50
  },
  canvas: {
    maxHeight: 400
  },
  resultBlock: {
    maxHeight: 256,
    transitionProperty: "opacity",
    transitionDuration: "2s",
    transitionTimingFunction: "ease-out",

    opacity: ({ isTransform }) => (isTransform ? 1 : 0),
    display: ({ isTransform }) => (isTransform ? "block" : "absolute"),
    position: ({ isTransform }) => (isTransform ? "absolute" : "absolute"),
    zIndex: ({ isTransform }) => (isTransform ? 9999 : ""),
    top: ({ isTransform }) => (isTransform ? 170 : ""),
    left: ({ isTransform }) => (isTransform ? "25%" : "")
  },
  resultButtons: {
    display: "inline-flex"
  },
  tagButtonStyle: {
    margin: 10
  },
  secondaryImage: {
    position: "absolute",
    right: 0,
    zIndex: 999,
    maxHeight: 400,
    top: "30%"
  }
});
