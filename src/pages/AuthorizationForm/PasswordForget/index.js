import React, { Fragment } from 'react';
import { useFormInput, useLoadingOrError } from '../../../userHooks';
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
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { LockOutlinedIcon } from '../../../Icons';

export const PasswordForgetLink = () => (
  <span>
    <Link to={routesType.PASSWORD_FORGET} lable='Forgot Password?' />
  </span>
);

const PasswordForget = ({ history, firebase }) => {
  const { error, getError, getLoading, isLoading } = useLoadingOrError();

  const email = useFormInput('');

  const onSubmit = e => {
    getLoading(true);
    firebase
      .doPasswordReset(email.value)
      .then(authUser => {
        email.value = '';

        return setTimeout(() => {
          getLoading(false);
          history.push(routesType.PASSWORD_CHANGE);
        }, 500);
      })
      .catch(err => {
        getLoading(false);
        getError(err);
      });

    e.preventDefault();
  };

  const isInvalid = email.value === '';

  return (
    <Layout>
      {isLoading && <Loading />}
      <Forma
        icon={<LockOutlinedIcon color='primary'/>}
        header='Password Reset'
        onSubmit={onSubmit}>
        <Error error={error} />
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
      </Forma>
    </Layout>
  );
};

export default compose(withFirebase, withRouter)(PasswordForget);
