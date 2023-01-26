const Sequelize = require('sequelize');
const connection = require('./database/database');

const Agendamentos = connection.define('agendamentos', {});
