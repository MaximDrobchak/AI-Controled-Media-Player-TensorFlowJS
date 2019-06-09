import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import * as routesType from '../../../constants/routes';
import { useFormInput } from '../../../userHooks';
import { Forma, TextField, Button, Link, Error } from '../../../components';
import { withFirebase } from '../../../firebase';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SignInLink } from '../../';
export const SignUpLink = () => (
  <span>
    Don't have an account? <Link to={routesType.SIGN_UP} lable='Sign Up' />
  </span>
);

const SignUp = ({ firebase, history }) => {
  const [ error, setError ] = useState(null);

  useEffect(
    () => {
      if (error) {
        setTimeout(() => {
          setError(null);
        }, 1000);
      }
    },
    [ error ],
  );
  const email = useFormInput('');
  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');
  const username = useFormInput('');

  const onSubmit = e => {
    firebase
      .doCreateUserWithEmailAndPassword(email.value, passwordOne.value)
      .then(authUser => {
        firebase.user(authUser.user.uid).set({
          username: username.value,
          email: email.value,
        });
        email.value = '';
        passwordOne.value = '';
        passwordTwo.value = '';
        username.value = '';
        return history.push(routesType.HOME);
      })
      .catch(err => {
        setError(err);
      });
    e.preventDefault();
  };

  const isInvalid =
    passwordOne.value !== passwordTwo.value ||
    passwordOne.value === '' ||
    email.value === '' ||
    username.value === '';

  return (
    <Forma
      icon={<LockOutlinedIcon />}
      header='Sign Up'
      onSubmit={onSubmit}
      link_1={<SignInLink />}>
      <Error error={error} />
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
    </Forma>
  );
};

export default compose(withRouter, withFirebase)(SignUp);
