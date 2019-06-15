import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default styled.button`
  border-radius: 4px;
  min-width: 25vw;
  border-color: #fd090f;
  background-color: #fd090f;
  font-family: Lato;
  padding: 12px;
  text-align: center;
  font-size: 100%;
  line-height: 1.4;
  letter-spacing: 1.2px;
  color: #ffffff;
`;
