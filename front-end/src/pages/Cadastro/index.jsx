import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axiosConfig";

import "./styles.css";

const Cadastro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/cadastro", formData);
      console.log(response.data);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-center bg-cadastro m-0 p-0 text-white">Cadastro</h1>
      <div className="bg-cadastro d-flex justify-content-center align-items-center p-5 fw-bold">
        <div className="cadastro w-25 border-success rounded-3 p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group pt-4">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group pt-4">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group pt-4">
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                className="form-control"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Idade:</label>
              <input
                type="text"
                name="idade"
                className="form-control"
                value={formData.idade}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Profissão:</label>
              <input
                type="text"
                name="profissao"
                className="form-control"
                value={formData.profissao}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Descrição:</label>
              <input
                type="text"
                name="descricao"
                className="form-control"
                value={formData.descricao}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Endereço:</label>
              <input
                type="text"
                name="endereco"
                className="form-control"
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Bairro:</label>
              <input
                type="text"
                name="bairro"
                className="form-control"
                value={formData.bairro}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Cidade:</label>
              <input
                type="text"
                name="cidade"
                className="form-control"
                value={formData.cidade}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Estado:</label>
              <input
                type="text"
                name="estado"
                className="form-control"
                value={formData.estado}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Telefone:</label>
              <input
                type="text"
                name="telefone"
                className="form-control"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Nome da Empresa:</label>
              <input
                type="text"
                name="nome_empresa"
                className="form-control"
                value={formData.nome_empresa}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Prestador/Cliente:</label>
              <input
                type="text"
                name="prestador_cliente"
                className="form-control"
                value={formData.prestador_cliente}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>CPF/CNPJ:</label>
              <input
                type="text"
                name="cpf_cnpj"
                className="form-control"
                value={formData.cpf_cnpj}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>LinkedIn:</label>
              <input
                type="text"
                name="linkedin"
                className="form-control"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Instagram:</label>
              <input
                type="text"
                name="instagram"
                className="form-control"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>WhatsApp:</label>
              <input
                type="text"
                name="whatsapp"
                className="form-control"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Telegram:</label>
              <input
                type="text"
                name="telegram"
                className="form-control"
                value={formData.telegram}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>Facebook:</label>
              <input
                type="text"
                name="facebook"
                className="form-control"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-4">
              <label>YouTube:</label>
              <input
                type="text"
                name="youtube"
                className="form-control"
                value={formData.youtube}
                onChange={handleChange}
              />
            </div>
            <div className="text-center pt-5">
            <button type="submit" className="btn btn-outline-success fw-bold">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
