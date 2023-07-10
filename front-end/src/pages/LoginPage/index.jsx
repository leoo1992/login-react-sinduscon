import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Logo.jpg";
import api from "./axiosConfig";
import { AuthContext } from "../../contexts/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, logout } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line
  useEffect(() => {
  // eslint-disable-next-line
    logout(); // Executa o logout quando a página é iniciada
  // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        const response = await api.post("/login", {
          email: email,
          password: password,
        });

        if (response.status === 200) {
          login(email, password)
            .then(() => {
              navigate("/auth"); // Redireciona para a rota privada após o login bem-sucedido
            })
            .catch((error) => {
              console.error("Erro ao fazer login:", error);
              // Realize as ações apropriadas para tratar o erro, como exibir uma mensagem de erro.
            });
        } else {
          console.log("Credenciais inválidas");
          // Realize as ações apropriadas para credenciais inválidas, como exibir uma mensagem de erro.
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        // Realize as ações apropriadas para tratar o erro, como exibir uma mensagem de erro.
      }
    } else {
      console.log("Preencha todos os campos!");
    }
  };

  return (
    <div
      id="login"
      className="d-flex p-4 justify-content-center align-items-center fw-bold"
    >
      <Link
        to="/"
        className="justify-content-center align-items-center text-center w-50 p-5"
      >
        <img src={logo} className="w-25" alt="Descrição da imagem" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="form-login border-primary w-100 p-4 rounded-3"
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label d-block">
            E-mail:
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control border-primary w-100"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="col-form-label d-block">
            Senha:
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control border-primary w-100"
            aria-describedby="passwordHelpInline"
            required
          />
        </div>
        <div className="text-center pt-3">
          <button
            type="submit"
            className="action-login btn btn-primary fw-bold"
          >
            Entrar
          </button>
        </div>
      </form>
      <div className="text-center">
        <h4 className="text-white">ou</h4>
      </div>
      <div className="text-center">
        <Link to="/cadastro" className="btn btn-danger fw-bold">
          Registrar
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
