//Mysql - 
const db = require('../config/db')

exports.buscaTodos = (retorno) => {
    db.query('select * from produtos', retorno)
}

exports.buscarPorId = (id, retorno) => {
    db.query('select * from produtos where id = ?', [id], retorno)
}

exports.inserir = (produto, retorno) => {
    const { nome, preco, estoque } = produto
    db.query('insert into produtos (nome, preco, estoque) values (?, ?, ?)', [nome, preco, estoque], retorno)
}

exports.atualizar = (id, produto, retorno) => {
    const { nome, preco, estoque } = produto
    db.query('update produtos set nome = ?, preco = ?, estoque = ? where id = ? ', [nome, preco, estoque, id], retorno)
}

exports.deletar = (id, retorno) => {
    db.query('delete from produtos where id = ?', [id], retorno)
}