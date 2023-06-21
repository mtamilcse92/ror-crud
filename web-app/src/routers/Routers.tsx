import React from 'react';
import { useRoutes } from 'react-router-dom';
import UserPage from '../pages/UserPage';
import CreateUserPage from '../pages/CreateUserPage';
import UpdateUserPage from '../pages/UpdateUserPage';

const routes = [
  {
    path: '/',
    element: <UserPage />,
    
  },
  {
    path: '/users/create',
    element: <CreateUserPage />,
    
  },
  {
    path: '/users/:id/edit',
    element: <UpdateUserPage />,
  },
];

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;
