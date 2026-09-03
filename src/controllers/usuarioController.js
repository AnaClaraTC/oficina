const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

async function cadastrar(req, res) {
  try {
    const { nome, cpf, idade, email, senha, telefone, cargo, redessociais, placacarro, modelocarro } = req.body;
    
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      nome,
      cpf,
      idade,
      email,
      senha: senhaCriptografada,
      telefone,
      cargo,
      redessociais,
      placacarro,
      modelocarro
    });

    res.status(201).json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      cargo: usuario.cargo
    });
  } catch (erro) {
    res.status(400).json({
      mensagem: 'Erro ao cadastrar usuário',
      erro: erro.message,
    });
  }
}

module.exports = { cadastrar };