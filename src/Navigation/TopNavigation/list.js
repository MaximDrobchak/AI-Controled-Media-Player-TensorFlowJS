import * as routeTypes from '../../constants/routes';
export const notAuth = [
  { id: '0', icon: 'user-circle', lable: 'SignIn', to: routeTypes.SIGN_IN },
];

export const auth = [
  { id: '1', icon: 'user-circle', lable: 'SignUp', to: routeTypes.SIGN_UP },
  { id: '2', icon: 'user-circle', lable: 'SignOut', to: routeTypes.DASHBOARD },
];
