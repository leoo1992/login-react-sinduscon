import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CadastroUsuario from "./pages/CadastroUsuario";
import Auth from "./pages/Auth";

import { AuthProvider, AuthContext } from './contexts/auth';

const AppRoutes = () => {
const Private = ({children}) => {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated){
    return <Navigate to="/login" />
  }
  return children;
};


  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/CadastroUser " element={<CadastroUsuario />} />
          <Route exact path="/Auth" element={<Private><Auth /></Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;