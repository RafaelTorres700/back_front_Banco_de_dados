//Mysql - 
const db = require('../config/db')

exports.buscaTodos = (retorno) => {
    db.query('select * from clientes', retorno)
}

exports.buscarPorId = (id, retorno) => {
    db.query('select * from clientes where id = ?', [id], retorno)
}

exports.inserir = (cliente, retorno) => {
    const {nome, cpf, sexo } = cliente
    db.query('insert into clientes (nome, cpf, sexo) values (?, ?, ?)', [nome, cpf, sexo], retorno)
}

exports.atualizar = (id, cliente, retorno) => {
    const { nome, cpf, sexo } = cliente
    db.query('update clientes set nome = ?, cpf = ?, sexo = ? where id = ? ', [nome, cpf, sexo, id], retorno)
}

exports.deletar = (id, retorno) => {
    db.query('delete from clientes where id = ?', [id], retorno)
}