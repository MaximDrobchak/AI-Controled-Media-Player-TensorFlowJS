import React, { useState } from 'react';
import { useFormInput } from '../../userHooks';

import { Forma, TextField, Button } from '../../components';
import { withFirebase } from '../../firebase';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Typography } from '@material-ui/core';

const SignIn = ({ firebase }) => {
  const [ error, setError ] = useState(null);

  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');

  const onSubmit = e => {
    firebase
      .doPasswordUpdate(passwordOne.value)
      .then(authUser => {
        passwordOne.value = '';
        passwordTwo.value = '';
      })
      .catch(err => {
        setError(err);
      });

    e.preventDefault();
  };
  const isInvalid =
    passwordOne === '' || passwordTwo === '' || passwordTwo !== passwordOne;

  return (
    <Forma icon={<LockOutlinedIcon />} header='Sign In' onSubmit={onSubmit}>
      <TextField
        {...passwordOne}
        id='passwordOne'
        label='password'
        name='passwordOne'
        autoComplete={false}
        autoFocus
      />
      <TextField
        {...passwordTwo}
        name='passwordTwo'
        label='Confirm Password'
        type='password'
        id='passwordTwo'
        autoComplete={false}
      />

      <Button type='submit'>Confirmation</Button>
      {error && (
        <Typography color='error' component='h1' variant='h5'>
          {error.message}
        </Typography>
      )}
    </Forma>
  );
};

export default withFirebase(SignIn);
