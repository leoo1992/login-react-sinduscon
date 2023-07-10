import React, {useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";


const Auth = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <h1>AUTENTICADO E LOGADO EM ROTA PRIVADA</h1>
      <Link to="/login" className="btn btn-primary fw-bold" onClick={logout}>
        Voltar
      </Link>
    </>
  );
};

export default Auth;
