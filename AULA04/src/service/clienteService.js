//regra de negócios validar CPF, aplicar calculos, evitar duplicidades
const repo = require('../repository/clienteRepository')

exports.getTodos = (retorno) => {
    repo.buscaTodos(retorno)
}
exports.getPorId = (id, retorno) => {
    repo.buscarPorId(id, retorno)
}
exports.criar = (cliente , retorno) => {
    repo.inserir(cliente, retorno)
}
exports.atualizar = (id, cliente, retorno) => {
    repo.atualizar(id, cliente, retorno)
}
exports.excluir = (id, retorno) => {
    repo.deletar(id, retorno)
}