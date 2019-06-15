import React from 'react';
import Link from '../Link';
import {
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText,
} from '@material-ui/core';
import { withFirebase } from '../../../firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
const Root = ({
  history,
  firebase,
  text,
  icon,
  to,
  styles,
  buttonStyles,
  button,
}) => {
  const onOut = () => {
    firebase.doSignOut();
    return history.push('/');
  };
  if (button) {
    return (
      <ListItem button key={text} onClick={onOut}>
        <Link
          to={to}
          lable={
            <div style={{ display: 'inline-flex' }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </div>
          }
        />
      </ListItem>
    );
  }
  else {
    return (
      <ListItem button key={text} style={buttonStyles}>
        <Link
          to={to}
          lable={
            <div style={{ display: 'inline-flex' }}>
              <ListItemIcon style={styles}>{icon}</ListItemIcon>
              <Typography
                variant='subtitle1'
                style={{
                  color:

                      buttonStyles &&
                      buttonStyles.textColor ? buttonStyles.textColor :
                      'blue',
                }}>
                {text}
              </Typography>
            </div>
          }
        />
      </ListItem>
    );
  }
};
export default compose(withFirebase, withRouter)(Root);
