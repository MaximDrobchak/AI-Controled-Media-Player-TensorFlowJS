import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'block',
    padding: 50,
    minHeight: '100%',
  },
  header: {
    marginBottom: 50,
    marginLeft: '50%',
    zIndex: 2,
  },
  mainGrid: {
    marginTop: 40,
    display: 'grid',
    grid: '1fr / repeat(5, 1fr)',
  },
  articalDev: {
    textAlign: 'left',
    zIndex: 2,
    gridRow: '1 / 2',
    gridColumn: '1 / 4',
    maxHeight: 300,
  },
  articalStrategi: {
    background: '#3d577c',
    zIndex: 2,
    textAlign: 'left',
    display: 'flex',
    gridRow: '3 / 6',
    gridColumn: '3 / 7',
    marginTop: -280,
    marginLeft: '50%',
    marginBottom: 50,
    maxWidth: 600,
    padding: 50,
  },
  articalCounsalting: {
    padding: '3em 0 0 4em',
    position: 'relative',
    textAlign: 'left',
    gridRow: '3 / 5',
    gridColumn: '4 / 6',
    zIndex: 2,
    maxHeight: 300,
    marginLeft: '50%',
  },
  '@media (max-width: 1199.98px)': {
    mainGrid: {
      marginTop: 40,
      display: 'grid',
      grid: '1fr / repeat(5, 1fr)',
    },
    articalDev: {
      textAlign: 'left',
      zIndex: 2,
      gridRow: '1 / 2',
      gridColumn: '1 / 4',
      maxHeight: 260,
      maxWidth: 260,
    },
    articalStrategi: {
      background: '#3d577c',
      zIndex: 2,
      textAlign: 'left',
      display: 'flex',
      gridRow: '3 / 6',
      gridColumn: '3 / 7',
      marginTop: -280,
      marginLeft: '50%',
      marginBottom: 50,
      maxWidth: 600,
      height: 260,
    },
    articalCounsalting: {
      padding: '3em 0 0 4em',
      position: 'relative',
      textAlign: 'left',
      gridRow: '3 / 5',
      gridColumn: '4 / 6',
      zIndex: 2,
      maxHeight: 300,
      marginLeft: '40%',
    },
  },

  '@media (max-width: 576px)': {
    mainGrid: {
      marginTop: 40,
      display: 'static',
      height: '100%',
    },
    articalDev: {
      textAlign: 'left',
      maxHeight: 100,
      position: 'relative',
      zIndex: 1,
    },
    articalStrategi: {
      background: '#3d577c',
      marginTop: 280,
      textAlign: 'right',
      display: 'flex',
      marginLeft: '0%',
      position: 'relative',
      width: '100%',
      maxHeight: 400,
      height: 250,
      zIndex: 2,
    },
    articalCounsalting: {
      padding: '3em 0 0 4em',
      position: 'absolute',
      textAlign: 'left',
      zIndex: 1,
      maxHeight: 300,
      marginLeft: '-10%',
      marginTop: '-20%',
    },
  },
});
