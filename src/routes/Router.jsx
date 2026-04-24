import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import RootLayout from '../layout/RootLayout';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/About',
        element: <h2>About page</h2>,
      },
      {
        path: '/skills',
        element: <h2>Skill page</h2>,
      },
      {
        path: '/projects',
        element: <h2>Projects page</h2>,
      },
      {
        path: '/contact',
        element: <h2>Contact page</h2>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
