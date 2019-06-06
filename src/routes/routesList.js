import { Loading } from '../components';
import Loadable from 'react-loadable';

export const LandingComponent = Loadable({
  loader: () => import('../pages/Landing'),
  loading: Loading,
});
export const HomeComponent = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

export const AccountComponent = Loadable({
  loader: () => import('../pages/Account'),
  loading: Loading,
});

export const AdminComponent = Loadable({
  loader: () => import('../pages/Admin'),
  loading: Loading,
});

export const SignInComponent = Loadable({
  loader: () => import('../pages/SignIn'),
  loading: Loading,
});

export const SignUpComponent = Loadable({
  loader: () => import('../pages/SignUp'),
  loading: Loading,
});

export const PasswordForgetComponent = Loadable({
  loader: () => import('../pages/PasswordForget'),
  loading: Loading,
});
export const PasswordChangeComponent = Loadable({
  loader: () => import('../pages/PasswordChange'),
  loading: Loading,
});
