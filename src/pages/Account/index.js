import React, { useState } from 'react';

import PasswordForget from '../PasswordForget';
import PasswordChange from '../PasswordChange';

const AccountPage = () => {
  const [ passwordChange, setPasswordChange ] = useState(null);

  return (
    <div>
      {
        passwordChange ? <PasswordChange /> :
        <PasswordForget setPasswordChange={setPasswordChange} />}
    </div>
  );
};

export default AccountPage;
