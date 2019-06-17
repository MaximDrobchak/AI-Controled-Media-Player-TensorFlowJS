import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  header: {
    marginLeft: 10,
    color: '#189af1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  arcticalText: {
    fontFamily: 'Roboto',
    fontSize: '1em',
    lineHeight: 1.5,
    letterSpacing: 0.3,

    width: 304,
    height: 92,
    textAlign: 'left',
    color: ({ textColor }) => textColor,
  },
  icon: {
    height: 56,
  },
  image: {
    maxWidth: '100%',
  },
  containerArctikal: {
    margin: 'auto',
  },
  '@media (max-width: 1100px)': {
    arcticalText: {
      width: 250,
    },
  },
});
