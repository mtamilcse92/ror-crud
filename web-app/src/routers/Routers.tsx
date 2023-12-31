import React from 'react';
import { useRoutes } from 'react-router-dom';
import UserPage from '../pages/UserPage';
import CreateUserPage from '../pages/CreateUserPage';
import OrderListPage from '../pages/OrderListPage';
import UserDetailPage from '../pages/UserDetailPage';
import UpdateUserPage from '../pages/UpdateUserPage';
import CreateOrderPage from '../pages/CreateOrderPage';

const routes = [
  {
    path: '/',
    element: <UserPage />,
    
  },
  {
    path: '/orders',
    element: <OrderListPage />,
    
  },
  {
    path: '/users/create',
    element: <CreateUserPage />,
    
  },
  {
    path: '/users/:id/edit',
    element: <UpdateUserPage />,
  },
  {
    path: '/users/:id/details',
    element: <UserDetailPage />,
  },
  {
    path: '/users/:id/orders/create',
    element: <CreateOrderPage />,
  },
];

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;
