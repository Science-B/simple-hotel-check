import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const logIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  };
  const logOut = (cb) => {
    setUser(null);
    cb();
  };
  const value = { user, logIn, logOut };
  console.log("user", user);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
