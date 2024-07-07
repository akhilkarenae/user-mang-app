import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuthenticatedUserData } from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // You can add more state management and logic here, e.g., storing user info
  const fetchData = async() =>{
    try{
        const authenticatedUser = await getAuthenticatedUserData();
        console.log(authenticatedUser.data.user," auth user")
        if (authenticatedUser.data.user) {
            setIsAuthenticated(true);
        }
    } catch (error) {
        console.error("error from here:", error);
    } finally {
        setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);