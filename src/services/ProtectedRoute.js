import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useAuth();
    if (loading) {
      // You can return a loading indicator or null while fetching authentication status
      return <div>Loading...</div>;
    }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};


export default ProtectedRoute