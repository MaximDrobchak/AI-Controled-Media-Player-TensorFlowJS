import * as routeTypes from '../constants/routes';
import {
  PasswordChange,
  PasswordForget,
  SignUp,
  SignIn,
  Galery,
  Account,
  Home,
  Landing,
  YouTube,
  NotFoundPage,
  Dashboard,
} from './routeComponents';

export default [
  {
    id: 0,
    path: routeTypes.LANDING,
    component: Landing,
  },
  {
    id: 1,
    path: routeTypes.PASSWORD_CHANGE,
    component: PasswordChange,
  },
  {
    id: 2,
    path: routeTypes.PASSWORD_FORGET,
    component: PasswordForget,
  },
  {
    id: 3,
    path: routeTypes.SIGN_UP,
    component: SignUp,
  },
  {
    id: 4,
    path: routeTypes.SIGN_IN,
    component: SignIn,
  },
  {
    id: 5,
    path: routeTypes.GALERY,
    component: Galery,
  },
  {
    id: 6,
    path: routeTypes.ACCOUNT,
    component: Account,
  },
  {
    id: 7,
    path: routeTypes.HOME,
    component: Home,
  },
  {
    id: 8,
    path: routeTypes.YOUTUBE,
    component: YouTube,
  },
  {
    id: 9,
    path: routeTypes.NOT_FOUND_404,
    component: NotFoundPage,
  },
  {
    id: 10,
    path: routeTypes.DASHBOARD,
    component: Dashboard,
  },
];
