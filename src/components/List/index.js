import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core/';
import ImageIcon from '@material-ui/icons/Image';
import { Avatar } from '../';
import { useStyles } from './styles';

const ItemList = ({ lable, lableSecondary, icon, dispatch, id, curent }) => {
  return (
    <ListItem
      onClick={() => dispatch({ type: 'CURENT', curent: id })}
      style={{ backgroundColor: id == curent && '#2196f3' }}>
      <ListItemAvatar>
        <Avatar>{icon || <ImageIcon />}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={lable} secondary={lableSecondary} />
    </ListItem>
  );
};

export default function FolderList ({ list, dispatch, curent }){
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {(list || []).map(item => (
        <div>
          <ItemList
            key={item.id}
            {...item}
            dispatch={dispatch}
            curent={curent}
          />
          <Divider />
        </div>
      ))}
    </List>
  );
}
