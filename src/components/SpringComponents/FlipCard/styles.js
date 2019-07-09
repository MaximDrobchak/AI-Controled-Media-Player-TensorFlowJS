import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    height: ({ heightImg }) => heightImg
  },
  flipC: {
    position: "absolute",
    height: ({ heightImg }) => heightImg,
    maxHeight: 360,
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
  },
  "@media (max-width: 1199.98px)": {
    flipC: {
      maxHeight: 360,
      maxWidth: 540
    }
  },
  "@media (max-width:801.98px)": {
    flipC: {
      maxHeight: 320,
      maxWidth: 500
    }
  },
  "@media (max-width: 420.98px)": {
    flipC: {
      maxHeight: 256,
      maxWidth: 320
    }
  }
});
