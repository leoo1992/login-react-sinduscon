import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import api from "./axiosConfig";
import { Link } from "react-router-dom";
import logo from "./Logo.jpg";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    login(email, password);

    if (email && password) {
      try {
        const response = await api.post("/login", {
          email: email,
          password: password,
        });
        console.log(response.data.message);
      } catch (error) {
        console.error(error.response.data.error);
      }
    } else {
      console.log("Preencha todos os campos!");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div
      id="login"
      className="d-flex p-4 justify-content-center align-items-center fw-bold"
    >
      <Link to="/" className="justify-content-center align-items-center text-center w-50 p-5">
      <img src={logo} className='w-25' alt="Descrição da imagem" />
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
        <h4 className='text-white'>ou</h4>
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
