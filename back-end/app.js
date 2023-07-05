require('dotenv').config();
const express = require('express');
const User = require('./models/user');
const sequelize = require('./database');
const cors = require('cors');

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
    const user = await User.findOne({
      where: {
        email: email,
        password: password
      }
    });

    if (user) {
      res.status(200).json({ message: 'Login realizado com sucesso!' });
      

    } else {
      res.status(401).json({ error: 'Credenciais inválidas.' });
    }
  } catch (err) {
    console.error('Erro ao realizar consulta:', err);
    res.status(500).json({ error: 'Erro ao realizar consulta.' });
  }
});

sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar os modelos com o banco de dados:', err);
  });

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
