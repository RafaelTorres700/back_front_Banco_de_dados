//HTTP
const service = require('../service/clienteService'); //service

exports.listar = (req, res) => {
    service.getTodos((erro, resultado) => {
        if(erro)
            return res.status(500).json({erro: 'Erro ao buscar clientes'})
            res.json(resultado)
    })
}
exports.buscarId = (req, res) => {
    const {id} = req.params;
    service.getPorId(id, (erro, resultado) => {
        if(erro)
            return res.status(500).json({erro: 'Erro ao buscar por id clientes'})
        if(resultado.lenght === 0)
            return res.status(404).json({erro: 'Cliente não encontrado'})
        res.json(resultado[0])
    })
}

exports.inserir = (req, res) => {
    service.criar(req.body, (erro, resultado) => {
        if(erro)
            return res.status(500).json({ erro: 'Erro ao inserir clientes' })
        res.status(201).json({ mensagem: 'Clinte cadastardo com sucesso', id: resultado.insertID })
    })
}

exports.atualizar = (req, res) => {
    const {id} = req.params;
    service.atualizar(id, req.body, (erro) => {
        if(erro)
            return res.status(500).json({ erro: 'Erro ao atualizar clientes' })
            res.json({ mensagem: 'Cliente atualizado com sucesso!!'})
    })
}

exports.deletar = (req, res) => {
    const {id} = req.params;
    service.excluir(id, (erro) => {
        if(erro)
            return res.status(500).json({ erro: 'Erro ao deletar clientes' })
            res.json({ mensagem: 'Cliente removido com sucesso!!'})
    })

}