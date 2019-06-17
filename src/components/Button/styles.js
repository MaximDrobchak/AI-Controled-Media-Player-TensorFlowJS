import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  redButton: {
    borderRadius: 4,
    minWidth: '25vw',
    borderColor: '#fd090f',
    backgroundColor: '#fd090f',
    fontFamily: 'Lato',
    padding: 12,
    textAlign: 'center',
    fontSize: '100%',
    lineHeight: 1.4,
    letterSpacing: 1.2,
    color: '#ffffff',
  },
}));
