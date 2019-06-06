import React from 'react';
import { MenuList, Divider, Paper } from '@material-ui/core/';
import RouteItem from '../RouteItem';
import { useStyles } from './styles';

export default ({ accountMenuList, handleModelClose, ...others }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.menuAccount}>
      <MenuList>
        {accountMenuList.map(item => (
          <span key={item.to} onClick={handleModelClose}>
            <RouteItem {...others} key={item.to} {...item} />
            <Divider />
          </span>
        ))}
      </MenuList>
    </Paper>
  );
};
