import {ErrorPage} from '@pages/error';
import {LoginPage} from '@pages/login';
import {SignUpPage} from '@pages/signup';
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';
import {RoutePath} from './constant';

const routes: RouteObject[] = [
  {
    path: RoutePath.LOGIN,
    element: <LoginPage />,
  },
  {
    path: RoutePath.SIGNUP,
    element: <SignUpPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export function AppRouter() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
