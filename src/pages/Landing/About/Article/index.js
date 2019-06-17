import React from 'react';

import { useStyles } from './styles';

const Article = ({ icon, headline, children, picture, textColor }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerArctikal}>
      <div>
        <img className={classes.icon} src={icon} alt='' />
        <span className={classes.header}>{headline}</span>
        <p textColor={textColor} className={classes.arcticalText}>
          {children}
        </p>
      </div>
      {picture && <img src={picture} className={classes.image} alt='' />}
    </div>
  );
};

export default Article;
