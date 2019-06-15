import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  player: {
    marginTop: 50,
    position: 'relative',
    maxWidth: 600,
    display: 'flex',
  },
  '@media (max-width: 576px)': {
    player: {
      maxWidth: 200,
    },
  },
  '@media (max-width: 1188px)': {
    player: {
      maxWidth: 360,
    },
  },
});
