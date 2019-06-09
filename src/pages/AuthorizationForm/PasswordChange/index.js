import React, { useState } from 'react';
import { useFormInput } from '../../../userHooks';

import { Forma, TextField, Button, Error } from '../../../components';
import { withFirebase } from '../../../firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as routesType from '../../../constants/routes';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const PasswordChange = ({ history, firebase }) => {
  const [ error, setError ] = useState(null);

  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');

  const onSubmit = e => {
    firebase
      .doPasswordUpdate(passwordOne.value)
      .then(authUser => {
        passwordOne.value = '';
        passwordTwo.value = '';
        return history.push(routesType.SIGN_IN);
      })
      .catch(err => {
        setError(err);
      });

    e.preventDefault();
  };
  const isInvalid =
    passwordOne.value === '' ||
    passwordTwo.value === '' ||
    passwordTwo.value !== passwordOne.value;

  return (
    <Forma
      icon={<LockOutlinedIcon />}
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
  );
};

export default compose(withRouter, withFirebase)(PasswordChange);
