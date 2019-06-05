import { Account, Home, PasswordForget, SignIn, SignUp, Admin } from '../pages';
import { Loading } from '../components';
import * as routesType from '../constants/routes';
import Loadable from 'react-loadable';
const LandingComponent = Loadable({
  loader: () => import('../pages/Landing'),
  loading: Loading,
});
LandingComponent;
export default [
  {
    id: routesType.LANDING,
    name: 'landing',
    Component: Home,
  },
  {
    id: routesType.HOME,
    name: routesType.HOME,
    Component: Home,
  },
  {
    id: routesType.SIGN_IN,
    name: routesType.SIGN_IN,
    Component: SignIn,
  },
  {
    id: routesType.SIGN_UP,
    name: routesType.SIGN_UP,
    Component: SignUp,
  },
  {
    id: routesType.PASSWORD_FORGET,
    name: routesType.PASSWORD_FORGET,
    Component: PasswordForget,
  },
  {
    id: routesType.ACCOUNT,
    name: routesType.ACCOUNT,
    Component: Account,
  },
  {
    id: routesType.ADMIN,
    name: routesType.ADMIN,
    Component: Admin,
  },
];
