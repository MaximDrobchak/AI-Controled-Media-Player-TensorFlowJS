import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import * as routesType from '../../../constants/routes';
import { useFormInput, useLoadingOrError } from '../../../userHooks';
import {
  Forma,
  TextField,
  Button,
  Link,
  Error,
  Loading,
  Layout,
} from '../../../components';
import { withFirebase } from '../../../firebase';
import { LockOutlinedIcon } from '../../../Icons';
import { SignInLink } from '../../';

export const SignUpLink = () => (
  <span>
    Don't have an account? <Link to={routesType.SIGN_UP} lable='Sign Up' />
  </span>
);

const SignUp = ({ firebase, history }) => {
  const { error, getError, getLoading, isLoading } = useLoadingOrError();
  const email = useFormInput('');
  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');
  const username = useFormInput('');

  const onSubmit = e => {
    getLoading(true);
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

        return setTimeout(() => {
          history.push(routesType.HOME);
        }, 1000);
      })
      .catch(err => {
        getLoading(false);
        getError(err);
      });
    e.preventDefault();
  };

  const isInvalid =
    passwordOne.value !== passwordTwo.value ||
    passwordOne.value === '' ||
    email.value === '' ||
    username.value === '';

  return (
    <Layout>
      {isLoading && <Loading />}
      <Forma
        icon={<LockOutlinedIcon color='primary' />}
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
    </Layout>
  );
};

export default compose(withRouter, withFirebase)(SignUp);
