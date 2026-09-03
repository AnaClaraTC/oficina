const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
nome: {
type: DataTypes.STRING,
allowNull: false,
},
cpf: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
},
idade: {
type: DataTypes.INTEGER,
allowNull: false,
},
email: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
},
senha: {
type: DataTypes.STRING,
allowNull: false,
},
telefone: {
type: DataTypes.STRING,
allowNull: false,
},
cargo: {
type: DataTypes.ENUM('mecanico', 'auxiliar', 'atendente', 'chefe', 'cliente'),
allowNull: false,
},
redessociais: {
type: DataTypes.STRING,
allowNull: true,
},
placacarro: {
type: DataTypes.STRING,
allowNull: true,
},
modelocarro: {
type: DataTypes.STRING,
allowNull: true,
},
});

module.exports = Usuario;