import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PasswordForget from '../PasswordForget';
import PasswordChange from '../PasswordChange';

const AccountPage = history => {
  const [ passwordChange, setPasswordChange ] = useState(null);
  return (
    <div>
      {
        passwordChange ? <PasswordChange history={history} /> :
        <PasswordForget setPasswordChange={setPasswordChange} />}
    </div>
  );
};

export default withRouter(AccountPage);
