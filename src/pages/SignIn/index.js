import React, { useState } from 'react';
import { useFormInput } from '../../userHooks';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { Forma, TextField, Button } from '../../components';
import { withFirebase } from '../../firebase';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core';

const SignIn = ({ firebase, history }) => {
  const [ error, setError ] = useState(null);
  const email = useFormInput('');
  const password = useFormInput('');

  const onSubmit = e => {
    firebase
      .doCreateUserWithEmailAndPassword(email.value, password.value)
      .then(authUser => {
        email.value = '';
        password.value = '';
      })
      .catch(err => {
        setError(err);
      });
    history.push(routes.LANDING);
    e.preventDefault();
  };
  const isInvalid = password === '' || email === '';

  return (
    <Forma icon={<LockOutlinedIcon />} header='Sign In' onSubmit={onSubmit}>
      <TextField
        {...email}
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
      />
      <TextField
        {...password}
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='password'
      />
      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='Remember me'
      />
      <Button disabled={isInvalid} type='submit'>
        Sign In
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
