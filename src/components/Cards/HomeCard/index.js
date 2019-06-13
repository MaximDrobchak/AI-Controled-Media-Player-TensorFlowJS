import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { RouteItem } from '../..';
import { OpenInNewIcon } from '../../../Icons';
export default function MediaControlCard ({ title, describtion, image, to }){
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            {title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {describtion}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <RouteItem
            to={to}
            icon={<OpenInNewIcon className={classes.playIcon} />}
            buttonStyles={{ width: 70 }}
          />
        </div>
      </div>
      <CardMedia className={classes.cover} image={image} title={title} />
    </Card>
  );
}
