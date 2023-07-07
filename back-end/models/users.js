const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.STRING,
  },
  profissao: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  }, 
  endereco: {
    type: DataTypes.STRING,
  },
  bairro: {
    type: DataTypes.STRING,
  },
  cidade: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  nome_empresa: {
    type: DataTypes.STRING,
  },
  prestador_cliente: {
    type: DataTypes.STRING,
  },
  cpf_cnpj: {
    type: DataTypes.STRING,
  }, 
  linkedin: {
    type: DataTypes.STRING,
  },
  instagram: {
    type: DataTypes.STRING,
  },
  whatsapp: {
    type: DataTypes.STRING,
  },
  telegram: {
    type: DataTypes.STRING,
  },
  facebook: {
    type: DataTypes.STRING,
  },
  youtube: {
    type: DataTypes.STRING,
  },

}, {
  timestamps: false
});

module.exports = Users;
