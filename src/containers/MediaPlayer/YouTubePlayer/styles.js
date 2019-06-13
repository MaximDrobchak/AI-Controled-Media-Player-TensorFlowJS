import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  root: { marginTop: 50, position: 'relative', width: 600 },
  buttons: {
    width: 300,
    backgroundColor: 'lightblue',
    borderRadius: '25px 25px 25px 25px',
    position: 'absolute',
    right: '40%',
    top: 62,
  },
});
