const Sequelize = require('sequelize');
const connection = require('./database');

const Agendamento = connection.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false, // Pode ser vazio? Não
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false, // Pode ser vazio? Não
  },
});

Agendamento.sync({ force: false }).then(() => {}); // Não cria tabela caso ja exista

module.exports = Agendamento;
