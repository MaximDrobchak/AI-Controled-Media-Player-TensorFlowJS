import React, { useState } from 'react';
import { useFormInput } from '../../userHooks';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { Forma, TextField, Button } from '../../components';
import { withFirebase } from '../../firebase';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography } from '@material-ui/core';

const SignIn = ({ firebase, history }) => {
  const [ error, setError ] = useState(null);
  const email = useFormInput('');

  const onSubmit = e => {
    firebase
      .doPasswordReset(email.value)
      .then(authUser => {
        email.value = '';
      })
      .catch(err => {
        setError(err);
      });
    history.push(routes.PASSWORD_CHANGE);
    e.preventDefault();
  };
  const isInvalid = email === '';

  return (
    <Forma
      icon={<LockOutlinedIcon />}
      header='Password Reset'
      onSubmit={onSubmit}>
      <TextField
        {...email}
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
      />
      <Button disabled={isInvalid} type='submit'>
        Password Reset
      </Button>
      {error && (
        <Typography color='error' component='h1' variant='h5'>
          {error.message}
        </Typography>
      )}
    </Forma>
  );
};

export default compose(withRouter, withFirebase)(SignIn);
