import React, { useState } from 'react';
import { useFormInput } from '../../../userHooks';
import * as routesType from '../../../constants/routes';
import { Forma, TextField, Button, Error, Link } from '../../../components';
import { withFirebase } from '../../../firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const PasswordForgetLink = () => (
  <span>
    <Link to={routesType.PASSWORD_FORGET} lable='Forgot Password?' />
  </span>
);

const PasswordForget = ({ history, firebase }) => {
  const [ error, setError ] = useState(null);
  const email = useFormInput('');

  const onSubmit = e => {
    firebase
      .doPasswordReset(email.value)
      .then(authUser => {
        email.value = '';
        return history.push(routesType.PASSWORD_CHANGE);
      })
      .catch(err => {
        setError(err);
      });

    e.preventDefault();
  };

  const isInvalid = email.value === '';

  return (
    <Forma
      icon={<LockOutlinedIcon />}
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
  );
};

export default compose(withFirebase, withRouter)(PasswordForget);
