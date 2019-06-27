import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    "& > div": {
      position: "absolute",
      width: "100%",
      height: "100%",
      willChange: "transform",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > div": {
        backgroundColor: "white",
        backgroundSize: "auto 85%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: 150,
        height: 256,
        willChange: "transform",
        borderRadius: 10,
        boxShadow: `0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
          0 10px 10px -10px rgba(50, 50, 73, 0.3)`
      }
    }
  }
});
