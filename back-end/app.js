const dotenv = require("dotenv");
const express = require("express");
const Users = require("./models/users");
const sequelize = require("./database");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
  sequelize
  .sync()
  .then(() => {
    console.log("Modelos sincronizados com o banco de dados.");
    app.listen(port, () => {
      console.log(`Servidor em execução na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao sincronizar os modelos com o banco de dados:", err);
  });
// Rota para autenticação
app.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("O email deve ser um endereço de email válido."),
    body("password").notEmpty().withMessage("A senha é obrigatória."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({
        where: {
          email: email,
        },
      });

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
          res.status(200).json({ token: token });
        } else {
          res.status(401).json({ error: "Credenciais inválidas." });
        }
      } else {
        res.status(401).json({ error: "Credenciais inválidas." });
      }
    } catch (err) {
      console.error("Erro ao realizar consulta:", err);
      res.status(500).json({ error: "Erro ao realizar consulta." });
    }
  }
);

// Rota para cadastro
app.post(
  "/cadastro",
  [
    body("email")
      .isEmail()
      .withMessage("O email deve ser um endereço de email válido.")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("A senha deve ter pelo menos 6 caracteres."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const formData = {
      email: sanitizeHtml(req.body.email),
      password: req.body.password,
      nome: sanitizeHtml(req.body.nome),
      idade: sanitizeHtml(req.body.idade),
      profissao: sanitizeHtml(req.body.profissao),
      descricao: sanitizeHtml(req.body.descricao),
      endereco: sanitizeHtml(req.body.endereco),
      bairro: sanitizeHtml(req.body.bairro),
      cidade: sanitizeHtml(req.body.cidade),
      estado: sanitizeHtml(req.body.estado),
      telefone: sanitizeHtml(req.body.telefone),
      nome_empresa: sanitizeHtml(req.body.nome_empresa),
      prestador_cliente: sanitizeHtml(req.body.prestador_cliente),
      cpf_cnpj: sanitizeHtml(req.body.cpf_cnpj),
      linkedin: sanitizeHtml(req.body.linkedin),
      instagram: sanitizeHtml(req.body.instagram),
      whatsapp: sanitizeHtml(req.body.whatsapp),
      telegram: sanitizeHtml(req.body.telegram),
      facebook: sanitizeHtml(req.body.facebook),
      youtube: sanitizeHtml(req.body.youtube),
    };

    try {
      // Verifica se o e-mail já existe no banco de dados
      const existingUser = await Users.findOne({
        where: {
          email: formData.email,
        },
      });

      if (existingUser) {
        // Se o e-mail já existe, retorna uma resposta informando o erro
        return res.status(400).json({ error: "O e-mail já está cadastrado." });
      }

      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      // Criar o novo usuário com a senha criptografada
      const createdUser = await Users.create({
        email: formData.email,
        password: hashedPassword,
        nome: formData.nome,
        idade: formData.idade,
        profissao: formData.profissao,
        descricao: formData.descricao,
        endereco: formData.endereco,
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado,
        telefone: formData.telefone,
        nome_empresa: formData.nome_empresa,
        prestador_cliente: formData.prestador_cliente,
        cpf_cnpj: formData.cpf_cnpj,
        linkedin: formData.linkedin,
        instagram: formData.instagram,
        whatsapp: formData.whatsapp,
        telegram: formData.telegram,
        facebook: formData.facebook,
        youtube: formData.youtube,
      });

      res.status(200).json({ message: "Cadastro realizado com sucesso." });
    } catch (err) {
      console.error("Erro ao inserir os dados: ", err);
      res.status(500).json({ error: "Erro ao realizar o cadastro." });
    }
  }
);

app.get("/consultaEmail/:email?", async (req, res) => {
  const email = req.params.email;

  try {
    // Verificar se o email existe no banco de dados
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      // Email já cadastrado, retorna erro
      res.status(200).json({ error: "O email já está cadastrado." });
    } else {
      // Email disponível para cadastro
      res
        .status(200)
        .json({ message: "O email está disponível para cadastro." });
    }
  } catch (err) {
    console.error("Erro ao realizar consulta:", err);
    res.status(500).json({ error: "Erro ao realizar consulta." });
  }
});
