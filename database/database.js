const Sequelize = require("sequelize");

const connection = new Sequelize('projetoperguntas','root','estudioso',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;