import React, { useState, useRef, useEffect } from "react";
import api from "./axiosConfig";
import { Link } from "react-router-dom";

import "./styles.css";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nome: "",
    idade: "",
    profissao: "",
    descricao: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    telefone: "",
    nome_empresa: "",
    prestador_cliente: "",
    cpf_cnpj: "",
    linkedin: "",
    instagram: "",
    whatsapp: "",
    telegram: "",
    facebook: "",
    youtube: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nome: "",
    idade: "",
    profissao: "",
    descricao: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    telefone: "",
    nome_empresa: "",
    prestador_cliente: "",
    cpf_cnpj: "",
    linkedin: "",
    instagram: "",
    whatsapp: "",
    telegram: "",
    facebook: "",
    youtube: "",
  });

  const errorRef = useRef(null);

  useEffect(() => {
    if (errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar a correspondência de senha
    if (formData.password !== formData.confirmPassword) {
      setFormErrors({
        ...formErrors,
        confirmPassword: "As senhas não correspondem",
      });
      return;
    } else {
      setFormErrors({
        ...formErrors,
        confirmPassword: "",
      });
    }

    const requiredFields = [
      "email",
      "password",
      "confirmPassword",
      "nome",
      "idade",
      "profissao",
      "descricao",
      "endereco",
      "bairro",
      "cidade",
      "estado",
      "telefone",
      "nome_empresa",
      "prestador_cliente",
      "cpf_cnpj",
      "linkedin",
      "instagram",
      "whatsapp",
      "telegram",
      "facebook",
      "youtube",
    ];

    const errors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = "Campo obrigatório";
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const { confirmPassword, ...dataWithoutConfirmPassword } = formData;

    try {
      await api.post("/cadastro", dataWithoutConfirmPassword);
    } catch (error) {
      console.error(error);
    }
  };

  const isFormValid = Object.keys(formErrors).length === 0;

  return (
    <div className="container-fluid w-100 p-0 m-0 bg-cadastro">
      <Link to="/" className="btn btn-danger fw-bold">
        Voltar
      </Link>
      <h1 className="text-center m-0 p-0 pt-4 text-danger">
        Cadastro
      </h1>
      <div className="bg-cadastro d-flex justify-content-center align-items-center p-md-5 p-lg-5 p-sm-2 fw-bold">
        <div className="cadastro  w-100 border-success rounded-3 p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && (
                <div className="error-message">{formErrors.email}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Senha:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {formErrors.password && (
                <div className="error-message">{formErrors.password}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Confirmar Senha:</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {formErrors.confirmPassword && (
                <div className="error-message" ref={errorRef}>
                  {formErrors.confirmPassword}
                </div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                className="form-control"
                value={formData.nome}
                onChange={handleChange}
              />
              {formErrors.nome && (
                <div className="error-message">{formErrors.nome}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Idade:</label>
              <input
                type="text"
                name="idade"
                className="form-control"
                value={formData.idade}
                onChange={handleChange}
              />
              {formErrors.idade && (
                <div className="error-message">{formErrors.idade}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Profissão:</label>
              <input
                type="text"
                name="profissao"
                className="form-control"
                value={formData.profissao}
                onChange={handleChange}
              />
              {formErrors.profissao && (
                <div className="error-message">{formErrors.profissao}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Descrição:</label>
              <input
                type="text"
                name="descricao"
                className="form-control"
                value={formData.descricao}
                onChange={handleChange}
              />
              {formErrors.descricao && (
                <div className="error-message">{formErrors.descricao}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Endereço:</label>
              <input
                type="text"
                name="endereco"
                className="form-control"
                value={formData.endereco}
                onChange={handleChange}
              />
              {formErrors.endereco && (
                <div className="error-message">{formErrors.endereco}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Bairro:</label>
              <input
                type="text"
                name="bairro"
                className="form-control"
                value={formData.bairro}
                onChange={handleChange}
              />
              {formErrors.bairro && (
                <div className="error-message">{formErrors.bairro}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Cidade:</label>
              <input
                type="text"
                name="cidade"
                className="form-control"
                value={formData.cidade}
                onChange={handleChange}
              />
              {formErrors.cidade && (
                <div className="error-message">{formErrors.cidade}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Estado:</label>
              <input
                type="text"
                name="estado"
                className="form-control"
                value={formData.estado}
                onChange={handleChange}
              />
              {formErrors.estado && (
                <div className="error-message">{formErrors.estado}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Telefone:</label>
              <input
                type="text"
                name="telefone"
                className="form-control"
                value={formData.telefone}
                onChange={handleChange}
              />
              {formErrors.telefone && (
                <div className="error-message">{formErrors.telefone}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Nome da Empresa:</label>
              <input
                type="text"
                name="nome_empresa"
                className="form-control"
                value={formData.nome_empresa}
                onChange={handleChange}
              />
              {formErrors.nome_empresa && (
                <div className="error-message">{formErrors.nome_empresa}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Prestador/Cliente:</label>
              <input
                type="text"
                name="prestador_cliente"
                className="form-control"
                value={formData.prestador_cliente}
                onChange={handleChange}
              />
              {formErrors.prestador_cliente && (
                <div className="error-message">
                  {formErrors.prestador_cliente}
                </div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>CPF/CNPJ:</label>
              <input
                type="text"
                name="cpf_cnpj"
                className="form-control"
                value={formData.cpf_cnpj}
                onChange={handleChange}
              />
              {formErrors.cpf_cnpj && (
                <div className="error-message">{formErrors.cpf_cnpj}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>LinkedIn:</label>
              <input
                type="text"
                name="linkedin"
                className="form-control"
                value={formData.linkedin}
                onChange={handleChange}
              />
              {formErrors.linkedin && (
                <div className="error-message">{formErrors.linkedin}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Instagram:</label>
              <input
                type="text"
                name="instagram"
                className="form-control"
                value={formData.instagram}
                onChange={handleChange}
              />
              {formErrors.instagram && (
                <div className="error-message">{formErrors.instagram}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>WhatsApp:</label>
              <input
                type="text"
                name="whatsapp"
                className="form-control"
                value={formData.whatsapp}
                onChange={handleChange}
              />
              {formErrors.whatsapp && (
                <div className="error-message">{formErrors.whatsapp}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Telegram:</label>
              <input
                type="text"
                name="telegram"
                className="form-control"
                value={formData.telegram}
                onChange={handleChange}
              />
              {formErrors.telegram && (
                <div className="error-message">{formErrors.telegram}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>Facebook:</label>
              <input
                type="text"
                name="facebook"
                className="form-control"
                value={formData.facebook}
                onChange={handleChange}
              />
              {formErrors.facebook && (
                <div className="error-message">{formErrors.facebook}</div>
              )}
            </div>
            <div className="form-group pt-sm-1 pt-md-2 pt-lg-2">
              <label>YouTube:</label>
              <input
                type="text"
                name="youtube"
                className="form-control"
                value={formData.youtube}
                onChange={handleChange}
              />
              {formErrors.youtube && (
                <div className="error-message">{formErrors.youtube}</div>
              )}
            </div>
            <div className="text-center pt-sm-1 pt-md-2 pt-lg-2">
              <button
                type="submit"
                className="btn btn-danger fw-bold"
                disabled={!isFormValid}
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;