import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: 400,
    height: 140,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid blue',

    position: 'relative',
  },
  slider: {
    position: 'absolute',
    margin: 'auto',
    width: '100%',
  },
  lable: {
    margin: 0,
    marginTop: 20,
    padding: 0,
    marginLeft: '28%',
  },
});
