import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginTop: 0,
    marginBottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid blue",

    position: "relative"
  },
  slider: {
    position: "absolute",
    margin: "auto",
    width: "100%"
  },
  lable: {
    margin: 0,
    marginTop: 20,
    padding: 0,
    marginLeft: "28%"
  }
});
