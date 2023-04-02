import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    console.log(res.data)
    setCurrentUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    console.log("logout")
    setCurrentUser(null);
  };

  useEffect(() => {
    // console.log(currentUser + " cu")
    
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
