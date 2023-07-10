import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        console.log("Login bem-sucedido");
        // ... lógica adicional após o login bem-sucedido
      } else {
        console.log("Credenciais inválidas");
        // ... lógica adicional para credenciais inválidas
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      // ... lógica adicional para tratamento de erro
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
