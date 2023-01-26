const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const connection = new Sequelize('db_nograu', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;
