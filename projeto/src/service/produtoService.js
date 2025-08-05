//regra de negócios validar CPF, aplicar calculos, evitar duplicidades
const repo = require('../repository/produtoRepository')

exports.getTodos = (retorno) => {
    repo.buscaTodos(retorno)
}
exports.getPorId = (id, retorno) => {
    repo.buscarPorId(id, retorno)
}
exports.criar = (produto , retorno) => {
    repo.inserir(produto, retorno)
}
exports.atualizar = (id, produto, retorno) => {
    repo.atualizar(id, produto, retorno)
}
exports.excluir = (id, retorno) => {
    repo.deletar(id, retorno)
}