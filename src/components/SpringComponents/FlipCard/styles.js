import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    display: "flex",
    height: ({ heigthImg }) => heigthImg
  },
  flipC: {
    position: "absolute",
    height: "80%",
    cursor: "pointer",
    background: "#373737",
    willChange: "transform, opacity",
    borderRadius: 5,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
});
