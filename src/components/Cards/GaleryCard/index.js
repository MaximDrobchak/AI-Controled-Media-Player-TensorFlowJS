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
import { RouteItem } from '../..';
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
        <RouteItem
          to={preview.to}
          icon={preview.icon}
          text={preview.text}
          styles={preview.styles}
          buttonStyles={preview.buttonStyles}
        />
        <RouteItem
          to={add.to}
          icon={add.icon}
          text={add.text}
          styles={add.styles}
          buttonStyles={preview.buttonStyles}
        />
      </CardActions>
    </Card>
  );
}
