import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Cadastro from "./pages/Cadastro";
import Auth from "./pages/Auth";
import { AuthProvider, AuthContext } from './contexts/auth';

const Private = ({ children }) => {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated){
    return <Navigate to="/login" />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/auth" element={<Private />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;