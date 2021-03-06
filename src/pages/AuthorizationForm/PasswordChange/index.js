import React, { Fragment } from 'react';
import { useFormInput, useLoadingOrError } from '../../../userHooks';

import {
  Forma,
  TextField,
  Button,
  Error,
  Loading,
  Layout,
} from '../../../components';
import { withFirebase } from '../../../firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as routesType from '../../../constants/routes';
import { LockOutlinedIcon } from '../../../Icons';

const PasswordChange = ({ history, firebase }) => {
  const { error, getError, getLoading, isLoading } = useLoadingOrError();

  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');

  const onSubmit = e => {
    getLoading(true);
    firebase
      .doPasswordUpdate(passwordOne.value)
      .then(authUser => {
        passwordOne.value = '';
        passwordTwo.value = '';

        return setTimeout(() => {
          history.push(routesType.SIGN_IN);
        }, 1000);
      })
      .catch(err => {
        getLoading(false);
        getError(err);
      });

    e.preventDefault();
  };
  const isInvalid =
    passwordOne.value === '' ||
    passwordTwo.value === '' ||
    passwordTwo.value !== passwordOne.value;

  return (
    <Layout>
      {isLoading && <Loading />}
      <Forma
        icon={<LockOutlinedIcon color='primary' />}
        header='Password Change'
        onSubmit={onSubmit}>
        <Error error={error} />
        <TextField
          {...passwordOne}
          id='passwordOne'
          label='password'
          name='passwordOne'
          type='password'
          autoComplete={undefined}
          autoFocus
        />
        <TextField
          {...passwordTwo}
          name='passwordTwo'
          label='Confirm Password'
          type='password'
          id='passwordTwo'
          autoComplete={undefined}
        />

        <Button disabled={isInvalid} type='submit'>
          Confirmation
        </Button>
      </Forma>
    </Layout>
  );
};

export default compose(withRouter, withFirebase)(PasswordChange);
