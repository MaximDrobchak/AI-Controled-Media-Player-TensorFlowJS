import React, { useState, useEffect } from 'react';

import { withFirebase } from '../../firebase';
import { useLoadingOrError } from '../../userHooks';
import { Layout, Loading } from '../../components';
const AdminPage = ({ firebase }) => {
  const [ users, setUsers ] = useState([]);
  const { getLoading, isLoading } = useLoadingOrError();

  useEffect(() => {
    getLoading(true);
    firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      setUsers(usersList);
      getLoading(false);
    });

    return () => {
      firebase.users().off();
    };
  }, []);

  return (
    <Layout>
      {isLoading && <Loading />}
      <UserList users={users} />
    </Layout>
  );
};

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);
