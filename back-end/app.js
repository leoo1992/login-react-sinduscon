require('dotenv').config();
const express = require('express');
const Users = require('./models/users');
const sequelize = require('./database');
const cors = require('cors');
const bcrypt = require("bcrypt");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Rota para autenticação
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({
      where: {
        email: email
      }
    });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).json({ message: 'Login realizado com sucesso!' });
      } else {
        res.status(401).json({ error: 'Credenciais inválidas.' });
      }
    } else {
      res.status(401).json({ error: 'Credenciais inválidas.' });
    }
  } catch (err) {
    console.error('Erro ao realizar consulta:', err);
    res.status(500).json({ error: 'Erro ao realizar consulta.' });
  }
});

// Rota para cadastro
app.post("/cadastro", async (req, res) => {
  const formData = req.body;

  try {
    // Verifica se o e-mail já existe no banco de dados
    const existingUser = await Users.findOne({
      where: {
        email: formData.email,
      },
    });

    if (existingUser) {
      // Se o e-mail já existe, retorna uma resposta informando o erro
      res.status(400).json({ error: "O e-mail já está cadastrado." });
    } else {
      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      // Criar o novo usuário com a senha criptografada
      const createdUser = await Users.create({
        email: formData.email,
        password: hashedPassword,
        // Outros campos do usuário...
      });

      res.status(200).json({ message: "Cadastro realizado com sucesso." });
    }
  } catch (err) {
    console.error("Erro ao inserir os dados: ", err);
    res.status(500).json({ error: "Erro ao realizar o cadastro." });
  }
});

sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
    app.listen(port, () => {
      console.log(`Servidor em execução na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar os modelos com o banco de dados:', err);
  });

app.get('/consultaEmail/:email', async (req, res) => {
  const email = req.params.email;

  try {
    // Criptografar o e-mail
    const encryptedEmail = await bcrypt.hash(email, 10);

    // Verificar se o e-mail criptografado existe no banco de dados
    const user = await Users.findOne({
      where: {
        email: encryptedEmail
      }
    });

    if (user) {
      res.status(200).json({ message: 'O email já está cadastrado.' });
    } else {
      res.status(200).json({ message: 'O email está disponível para cadastro.' });
    }
  } catch (err) {
    console.error('Erro ao realizar consulta:', err);
    res.status(500).json({ error: 'Erro ao realizar consulta.' });
  }
});
