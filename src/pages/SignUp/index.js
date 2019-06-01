import React, { useState } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { useFormInput } from '../../userHooks';
import { Forma, TextField, Button } from '../../components';
import { withFirebase } from '../../firebase';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography } from '@material-ui/core';

const SignUp = ({ firebase, history }) => {
  const [ error, setError ] = useState(null);
  const email = useFormInput('');
  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');
  const username = useFormInput('');

  const onSubmit = e => {
    firebase
      .doCreateUserWithEmailAndPassword(email.value, passwordOne.value)
      .then(authUser => {
        email.value = '';
        passwordOne.value = '';
        passwordTwo.value = '';
        username.value = '';
      })
      .catch(err => {
        setError(err);
      });
    history.push(routes.HOME);
    e.preventDefault();
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  return (
    <Forma
      icon={<LockOutlinedIcon />}
      header='Sign Up'
      onSubmit={onSubmit}
      footerShow={false}>
      <TextField
        {...username}
        label='Username'
        type='name'
        name='username'
        autoComplete='name'
        autoFocus
      />
      <TextField {...email} label='Email Address' autoComplete='email' />
      <TextField
        {...passwordOne}
        label='Password'
        type='password'
        name='passwordOne'
        autoComplete='password'
      />
      <TextField
        {...passwordTwo}
        label='Confirm Password'
        type='password'
        name='passwordTwo'
        autoComplete='password'
      />

      <Button disabled={isInvalid} type='submit'>
        Sign Up
      </Button>
      {error && (
        <Typography color='error' component='h1' variant='h5'>
          {error.message}
        </Typography>
      )}
    </Forma>
  );
};

export default compose(withRouter, withFirebase)(SignUp);
