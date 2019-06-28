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
    cursor: "pointer",
    background: "#373737",
    willChange: "transform, opacity",
    transitionDuration: "1s",
    transitionTimingFunction: "ease-out",
    borderRadius: 5,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
});
