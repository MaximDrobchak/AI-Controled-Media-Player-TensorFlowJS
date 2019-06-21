import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  root: {
    width: 300,

    borderRadius: '25px 25px 25px 25px',
  },
  buttonStyle: {
    borderRadius: '100%',
    display: 'flex',
    '& > *': {
      margin: 'auto',
      position: 'relative',
      right: 5,
    },
  },
});
