import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    position: "relative",

    display: "flex",
    height: ({ heightImg }) => heightImg
  },
  flipC: {
    position: "absolute",
    height: ({ heightImg }) => heightImg,
    maxHeight: 400,
    maxWidth: 600,
    cursor: "pointer",
    background: "#373737",
    willChange: "transform, opacity",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease-out",
    borderRadius: 5,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
});
