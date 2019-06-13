import React from 'react';
import { Link } from '../';
import { ListItem, ListItemIcon, Typography } from '@material-ui/core';
import { withFirebase } from '../../firebase';
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
    history.push('/');
    window.location.reload();
    return firebase.doSignOut();
  };
  if (button) {
    return (
      <ListItem button key={text} onClick={onOut} style={buttonStyles}>
        <Link
          to={to}
          lable={
            <span style={{ display: 'inline-flex', ...buttonStyles }}>
              <ListItemIcon style={styles}>{icon}</ListItemIcon>
              <Typography>{text}</Typography>
            </span>
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
            <span style={{ display: 'inline-flex' }}>
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
            </span>
          }
        />
      </ListItem>
    );
  }
};
export default compose(withFirebase, withRouter)(Root);
