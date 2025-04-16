import { createContext, useContext, useEffect, useState } from "react";
import { setAuthInterceptor, clearAuthInterceptor } from "../../config/api"; // o el path donde esté

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    if (token) {
      clearAuthInterceptor(); // ⬅️ elimina el interceptor viejo si existe
      setAuthInterceptor(token, logout);
    }
  
  }, [token]);
  
  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
