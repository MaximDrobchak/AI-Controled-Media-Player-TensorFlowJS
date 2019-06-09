import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default styled.button`
  width: 384px;
  height: 72px;
  border-radius: 4px;
  border-color: #fd090f;
  background-color: #fd090f;
  font-family: Lato;
  padding: 7px;
  padding-left: 25%;
  text-align: center;
  font-size: 30px;
  line-height: 1.4;
  letter-spacing: 1.2px;
  text-align: left;
  color: #ffffff;
`;
