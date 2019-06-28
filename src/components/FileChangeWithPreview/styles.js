import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 500,
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
        },

  "@media (max-width: 1199.98px)": {
    image: ({ inputID }) =>
      inputID == "style-img"
        ? {
            maxHeight: 340,
            maxWidth: 520
          }
        : {
            maxHeight: 320,
            maxWidth: 500
          }
  },
  "@media (max-width:801.98px)": {
    image: {
      maxHeight: 340,
      maxWidth: 480
    }
  },
  "@media (max-width: 420.98px)": {
    flipC: {
      image: ({ inputID }) =>
        inputID == "style-img"
          ? {
              maxHeight: 320,
              maxWidth: 360
            }
          : {
              maxHeight: 286,
              maxWidth: 360
            }
    }
  }
});
