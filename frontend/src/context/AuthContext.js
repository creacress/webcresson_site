import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('https://webcresson/api/check-access', { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        if (data.access) {
          setIsAuthenticated(true);
          sessionStorage.setItem('isAuthenticated', 'true');
        } else {
          setIsAuthenticated(false);
          sessionStorage.removeItem('isAuthenticated');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setIsAuthenticated(false);
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
