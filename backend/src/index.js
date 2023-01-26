const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão com banco de dados Sucesso!');
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  console.log('Opa, Bem vindo');
  res.json({
    Bem: 'Vindo',
  });
});

// Servidor
app.listen(7777, () => {
  console.log('Servidor iniciado, porta 7777');
});
