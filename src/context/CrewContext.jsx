import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CrewContext = createContext();

export const CrewContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      `https://mady.tech/api/v1/auth/login/crew/`,
      inputs
    );
    console.log(res.data);
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
    <CrewContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </CrewContext.Provider>
  );
};
