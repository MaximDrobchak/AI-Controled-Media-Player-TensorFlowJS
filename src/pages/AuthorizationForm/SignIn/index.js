import React, { Fragment } from 'react';
import { useFormInput, useLoadingOrError } from '../../../userHooks';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import * as routesType from '../../../constants/routes';
import {
  Forma,
  TextField,
  Button,
  Error,
  Link,
  Loading,
  Layout,
} from '../../../components';
import { withFirebase } from '../../../firebase';
import { LockOutlinedIcon } from '../../../Icons';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { SignUpLink, PasswordForgetLink } from '../../';

export const SignInLink = () => (
  <span>
    You have an account? <Link to={routesType.SIGN_IN} lable='Sign In' />
  </span>
);

const SignIn = ({ firebase, history }) => {
  const { error, getError, getLoading, isLoading } = useLoadingOrError();

  const email = useFormInput('');
  const password = useFormInput('');

  const onSubmit = e => {
    getLoading(true);
    firebase
      .doSignInWithEmailAndPassword(email.value, password.value)
      .then(authUser => {
        email.value = '';
        password.value = '';

        return setTimeout(() => {
          getLoading(false);
          history.push(routesType.HOME);
        }, 500);
      })
      .catch(err => {
        getLoading(false);
        getError(err);
      });
    e.preventDefault();
  };
  const isInvalid = password.value === '' || email.value === '';

  return (
    <Layout>
      {isLoading && <Loading />}
      <Forma
        icon={<LockOutlinedIcon />}
        header='Sign In'
        onSubmit={onSubmit}
        link_2={<SignUpLink />}
        link_1={<PasswordForgetLink />}>
        <Error error={error} />
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
      </Forma>
    </Layout>
  );
};

export default compose(withRouter, withFirebase)(SignIn);
