import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
} from '@material-ui/core';
import RouteItem from '../RouteItem';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuAccount from '../MenuList';
import { useStyles } from './styles';

import Modal from '@material-ui/core/Modal';

export default ({ routeList, accountMenuList, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [ open, setOpen ] = useState(false);
  const [ trigerMenu, setTrigerMenu ] = useState(false);

  function handleDrawerOpen (){
    setOpen(true);
  }

  function handleDrawerClose (){
    setOpen(false);
  }
  function handleModelOpen (){
    setTrigerMenu(true);
  }

  function handleModelClose (){
    setTrigerMenu(false);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar className={classes.toolBarHeader}>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}>
            <MenuIcon />
          </IconButton>
          <div>
            <IconButton
              color='inherit'
              onClick={handleModelOpen}
              className={classes.accountButton}>
              <AccountCircleIcon />
            </IconButton>

            <Modal open={trigerMenu} onClose={handleModelClose}>
              <MenuAccount
                accountMenuList={accountMenuList}
                handleModelClose={handleModelClose}
              />
            </Modal>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {
              theme.direction === 'rtl' ? <ChevronRightIcon /> :
              <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routeList.map(item => (
            <span key={item.text}>
              <RouteItem to={item.to} text={item.text} icon={item.icon} />
              <Divider />
            </span>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
