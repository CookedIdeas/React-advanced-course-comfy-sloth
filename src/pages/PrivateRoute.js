import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ redirectPath = '/', children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
export default PrivateRoute;
