import React from 'react';
import { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const authentication = JSON.parse(localStorage.getItem('auth'));
  const [auth, setAuth] = useState(authentication || null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
