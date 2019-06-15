import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core/';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '../Avatar';
import { useStyles } from './styles';

const ItemList = ({ lable, lableSecondary, icon, dispatch, id, curent }) => {
  return (
    <ListItem
      onClick={() => dispatch({ type: 'CURENT', curent: id })}
      style={{
        transition: 'border 1s ease-out 0.5s',
        backgroundColor: id == curent && '#2196f3',
        border: id == curent && '2px solid tomato',
        padding: 4,
        marginBottom: 4,
      }}>
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
        <div key={item.id}>
          <ItemList {...item} dispatch={dispatch} curent={curent} />
          <Divider />
        </div>
      ))}
    </List>
  );
}
