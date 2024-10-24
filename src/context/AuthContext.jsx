import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      `https://mady.tech/api/v1/auth/login/client/`,
      inputs
    );
    console.log(res.data)
    setCurrentUser(res.data.user);
    localStorage.setItem('accessToken', res.data.tokens.access);
  };

  const logout = async (inputs) => {
    await axios.post(`https://mady.tech/api/v1/auth/logout/`);
    setCurrentUser(null);
    localStorage.removeItem('accessToken');
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
