// UserContext.js
import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const setAuthenticatedUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <UserContext.Provider value={{ username, setAuthenticatedUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};


UserProvider.propTypes = {
  children: PropTypes.any,
};
