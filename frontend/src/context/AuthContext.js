import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/check-access', { credentials: 'include' })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to check access');
        }
      })
      .then(data => {
        if (data.access) {
          setIsAuthenticated(true);
          sessionStorage.setItem('isAuthenticated', 'true');
        } else {
          sessionStorage.removeItem('isAuthenticated');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        sessionStorage.removeItem('isAuthenticated');
      });
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
