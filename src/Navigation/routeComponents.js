import { Loading } from '../components';
import Loadable from 'react-loadable';

export const StyleTransfer = Loadable({
  loader: () => import('../pages/AIPages/StylesTransform'),
  loading: Loading,
});

export const YouTube = Loadable({
  loader: () => import('../pages/AIPages/YouTubePage'),
  loading: Loading,
});

export const Landing = Loadable({
  loader: () => import('../pages/Landing'),
  loading: Loading,
});

export const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

export const Account = Loadable({
  loader: () => import('../pages/Account'),
  loading: Loading,
});

export const Galery = Loadable({
  loader: () => import('../pages/Galery'),
  loading: Loading,
});

export const SignIn = Loadable({
  loader: () => import('../pages/AuthorizationForm/SignIn'),
  loading: Loading,
});

export const SignUp = Loadable({
  loader: () => import('../pages/AuthorizationForm/SignUp'),
  loading: Loading,
});

export const PasswordForget = Loadable({
  loader: () => import('../pages/AuthorizationForm/PasswordForget'),
  loading: Loading,
});

export const PasswordChange = Loadable({
  loader: () => import('../pages/AuthorizationForm/PasswordChange'),
  loading: Loading,
});

export const NotFoundPage = Loadable({
  loader: () => import('../pages/SupportstPage/NotFoundPage'),
  loading: Loading,
});
