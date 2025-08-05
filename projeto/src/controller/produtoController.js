//HTTP
const service = require('../service/produtoService'); //service

exports.listar = (req, res) => {
    service.getTodos((erro, resultado) => {
        if(erro)
            return res.status(500).json({erro: 'Erro ao buscar produtos'})
            res.json(resultado)
    })
}
exports.buscarId = (req, res) => {
    const {id} = req.params;
    service.getPorId(id, (erro, resultado) => {
        if(erro)
            return res.status(500).json({erro: 'Erro ao buscar por id produtos'})
        if(resultado.length
            
            
            
            
            
            
            
            
            === 0)
            return res.status(404).json({erro: 'Produto não encontrado'})
        res.json(resultado[0])
    })
}

exports.inserir = (req, res) => {
    service.criar(req.body, (erro, resultado) => {
        if(erro)
            return res.status(500).json({ erro: 'Erro ao inserir produtos' })
        res.status(201).json({ mensagem: 'Clinte cadastardo com sucesso', id: resultado.insertID })
    })
}

exports.atualizar = (req, res) => {
    const {id} = req.params;
    service.atualizar(id, req.body, (erro) => {
        if(erro)
            return res.status(500).json({ erro: 'Erro ao atualizar produtos' })
            res.json({ mensagem: 'produto atualizado com sucesso!!'})
    })
}

exports.deletar = (req, res) => {
    const {id} = req.params;
    service.excluir(id, (erro) => {
        if(erro)
            return res.status(500).json({ erro: 'Erro ao deletar produtos' })
            res.json({ mensagem: 'produto removido com sucesso!!'})
    })

}