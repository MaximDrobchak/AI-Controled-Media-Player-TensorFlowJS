import BackGroundIcon from './img/mainBackground.png';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'grid',
    grid: 'repeat(12, 1fr) / repeat(12, 1fr)',
    gridGap: 0,
    maxWidth: '100%',
    minWidth: 300,
    maxHeight: '96vh',
    height: '96vh',
    owerflovX: 'hidden',
    background: `url('${BackGroundIcon}') no-repeat center`,
    backgroundSize: 'cover',
    position: 'relative',
    scrollBehavior: 'smooth',
  },
  menuItem: {
    height: 50,
    border: ({ target, linkID }) =>

        target == linkID ? '5px solid #189af1' :
        '0px',
  },
  navigation: {
    width: '100%',
    maxWidth: 60,
    height: '100%',
    display: 'flex',
    zIndex: 100,
    position: 'fixed',
    flexDirection: 'column',
    marginLeft: '-2.7%',
    marginTop: '3.7%',
    paddingTop: 18,
    '& > a': {
      marginTop: 25,
      '& > img:hover': {
        border: '7px solid red',
      },
    },
  },
  '@media (max-width: 1199.98px)': {
    root: {
      maxHeight: 450,
    },
  },
});
