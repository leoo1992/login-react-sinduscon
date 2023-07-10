import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Cadastro from "./pages/Cadastro";
import Auth from "./pages/Auth";
import { AuthProvider} from "./contexts/auth";

// TODO: Verificar a autenticação do usuário antes de renderizar o componente

// const Private = ({ children }) => {
//   const { authenticated } = useContext(AuthContext);
//   if (!authenticated) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/auth" element={<Auth />}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
