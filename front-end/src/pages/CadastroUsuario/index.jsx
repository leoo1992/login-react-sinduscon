import { useState } from 'react';

function CadastroUsuario() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    nome: '',
    idade: '',
    profissao: '',
    descricao: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    telefone: '',
    nome_empresa: '',
    prestador_cliente: '',
    cpf_cnpj: '',
    linkedin: '',
    instagram: '',
    whatsapp: '',
    telegram: '',
    facebook: '',
    youtube: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envie os dados do formulário para o backend aqui
    console.log(formValues);
  };

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Adicione os outros campos do formulário aqui */}
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
