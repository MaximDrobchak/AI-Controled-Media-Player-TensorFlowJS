import React from 'react';
import { useStyles } from './styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from '@material-ui/core';
import { NavigationLink } from '../';
export default function MediaCard ({ image, title, describtion, preview, add }){
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant='body2' color='textSecondary' component='p'>
            {describtion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavigationLink
          to={preview.to}
          icon={preview.icon}
          lable={preview.text}
        />
        <NavigationLink to={add.to} icon={add.icon} lable={add.text} />
      </CardActions>
    </Card>
  );
}
