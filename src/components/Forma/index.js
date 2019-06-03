import React from 'react';
import Avatar from '../Avatar';
import FooterForm from './FooterForm';
import {
  Link,
  Box,
  Container,
  CssBaseline,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function MadeWithLove (){
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Built with love by the '}
      <Link color='primary' href='http://samikoma.zzz.com.ua'>
        Samicoma
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    position: 'relative',
    top: -50,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function SignIn ({
  icon,
  header,
  onSubmit,
  children,
  link_1,
  link_2,
}){
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs' className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar icon={icon} />
        <Typography component='h1' variant='h5'>
          {header}
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          {children}
          <FooterForm link_1={link_1} link_2={link_2} />
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}
