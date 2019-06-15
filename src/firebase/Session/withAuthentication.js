import React, { useEffect, useState } from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../';

export default Component => {
  function WithRoot (props){
    const [ authUser, setAuthUser ] = useState(false);

    useEffect(
      () => {
        const listener = props.firebase.auth.onAuthStateChanged(authUser => {

            authUser ? setAuthUser(true) :
            setAuthUser(false);
        });

        return () => {
          listener();
        };
      },
      [ authUser, props ],
    );

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  }

  return withFirebase(WithRoot);
};
