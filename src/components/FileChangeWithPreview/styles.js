import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 400,
    position: "relative"
  },
  image: ({ inputID, heightImg }) =>
    inputID == "style-img"
      ? {
          position: "absolute",
          zIndex: -1,
          opacity: 0,
          maxHeight: 400,
          minHeight: 100,
          height: heightImg
        }
      : {
          position: "absolute",
          zIndex: -1,
          opacity: 0,
          maxHeight: 400,
          minHeight: 256,
          height: heightImg
        }
});
