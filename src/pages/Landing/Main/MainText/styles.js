import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    fontSize: '200%',
    lineHeight: 1.2,
    color: '#189af1',
    fontFamily: 'Roboto',
    gridArea: '5 / 7 / 12 / 12',
    '& > p': {
      margin: 2,
    },
  },
  mainWord: {
    fontSize: '220%',
    fontWeight: 900,
    lineHeight: 1.21,
    letterSpacing: '350%',
    color: '#ffffff',
  },
  '@media (max-width: 576px)': {
    root: {
      fontSize: '110%',
      lineHeight: 1.2,
      color: '#189af1',
      letterSpacing: '150%',
      fontFamily: 'Roboto',
      gridArea: '6 / 8 / 5 / 7',
      marginLeft: -60,
      '& > p': {
        margin: 2,
      },
    },
    mainWord: {
      fontSize: '160%',
      fontWeight: 900,
      lineHeight: 1.21,
      letterSpacing: '350%',
      color: '#ffffff',
    },
  },
  '@media (max-width: 1199.98px)': {
    root: {
      marginLeft: -70,
      gridArea: '5 / 7 / 9 / 11',
    },
    mainWord: {
      fontSize: '160%',
      fontWeight: 900,
      lineHeight: 1.21,
      letterSpacing: '250%',
      color: '#ffffff',
    },
  },
});
