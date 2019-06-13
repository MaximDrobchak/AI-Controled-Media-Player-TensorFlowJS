import { Loading } from '../components';
import Loadable from 'react-loadable';

export const YouTubeComponent = Loadable({
  loader: () => import('../pages/AIPages/YouTubePage'),
  loading: Loading,
});

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

export const GaleryComponent = Loadable({
  loader: () => import('../pages/Galery'),
  loading: Loading,
});

export const SignInComponent = Loadable({
  loader: () => import('../pages/AuthorizationForm/SignIn'),
  loading: Loading,
});

export const SignUpComponent = Loadable({
  loader: () => import('../pages/AuthorizationForm/SignUp'),
  loading: Loading,
});

export const PasswordForgetComponent = Loadable({
  loader: () => import('../pages/AuthorizationForm/PasswordForget'),
  loading: Loading,
});
export const PasswordChangeComponent = Loadable({
  loader: () => import('../pages/AuthorizationForm/PasswordChange'),
  loading: Loading,
});
