import React from 'react';
import { MenuList, Divider, Paper } from '@material-ui/core/';
import RouteItem from '../RouteItem';
import { useStyles } from './styles';

export default ({ firebase, accountMenuList, ...others }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.menuAccount}>
      <MenuList>
        {accountMenuList.map(item => (
          <span key={item.to}>
            <RouteItem
              {...others}
              key={item.to}
              to={item.to}
              text={item.text}
              icon={item.icon}
              button={item.button}
            />
            <Divider />
          </span>
        ))}
      </MenuList>
    </Paper>
  );
};
