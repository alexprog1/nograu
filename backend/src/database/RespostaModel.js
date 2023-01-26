const Sequelize = require('Sequelize');
const connection = require('./database');

const Resposta = connection.define('respostas', {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false, // Pode ser vazio? Não
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false, // Pode ser vazio? Não
  },
});

Resposta.sync({ force: false }); // Não cria tabela caso ja exista

module.exports = Resposta;
