const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

async function cadastrar(req, res) {
try {
const { nome, cpf, idade, telefone, email, senha, cargo, redessociais } = req.body;

const senhaCriptografada = await bcrypt.hash(senha, 10);

const usuario = await Usuario.create({
nome,
cpf,
idade,
telefone,
email,
senha: senhaCriptografada,
cargo,
redessociais,
placacarro: null,
modelocarro: null,
});

res.status(201).json({
id: usuario.id,
nome: usuario.nome,
cpf: usuario.cpf,
idade: usuario.idade,
telefone: usuario.telefone,
email: usuario.email,
cargo: usuario.cargo,
redessociais: usuario.redessociais,
placacarro: usuario.placacarro,
modelocarro: usuario.modelocarro,
});
} catch (erro) {
res.status(400).json({
mensagem: 'Erro ao cadastrar usuário',
erro: erro.message,
});
}
}

module.exports = { cadastrar };