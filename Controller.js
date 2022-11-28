const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Tipos de parâmetros
 *
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção/alteração (JSON)
 */

// Start Server
const port = process.env.PORT || 3333;
app.listen(port, (req, ress) => {
  console.log('Servidor iniciado na porta 3333');
});

/**
 * Cadastro Usuario do Sistema
 * Email - String
 * Senha - Password
 */

app.post('/login', (request, response) => {
  const { email, senha } = request.body;
});

/**
 * Cadastro cliente no sistema
 * id - uuid
 * data_registro - datatime
 * name - string
 * cpf - string
 * endereco - string
 * bairro - string
 * telefone - int
 */

app.post('/cliente', (request, response) => {
  const { data_registro, name, cpf, endereco, bairro, telefone } = request.body;
});

/**
 * Cadastro de Agendamento
 * id - uuid
 * data_registro - datatime
 * cliente - string
 * veiculo - string
 * km - int
 * data_saida - datatime
 * status - string
 *
 * servico - string
 * forma_pagamento - string
 *  total - real
 *
 *
 *
 */

app.post('/agendamento', (request, response) => {
  const { data_registro, cliente, veiculo, km, data_saida, status } =
    request.body;
});

/**
 * Caixa
 *
 */

app.get('/caixa', (request, response) => {
  return response.json({ message: 'Seu caixa esta com 0,00 R$' });
});

app.get('/consultar', (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(['Agendamento 1', 'Agendamento 2, Agendamento 3']);
});

app.post('/consultar', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(['Agendamento 1', 'Agendamento 2, Agendamento 3']);
});

app.put('/consultar/:id', (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json(['Agendamento 1', 'Agendamento 2, Agendamento 3']);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/', (req, res) => {
  res.send('Recebido, Funcionando!');
  console.log(req.body);
});

app.get('/', (req, res) => {
  res.send('Boa garoto, Funcionando!');
});
