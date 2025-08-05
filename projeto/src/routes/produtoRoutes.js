const express = require('express')
const router = express.Router() //rotas do express
const controller = require('../controller/produtoController')

router.get('/produtos', controller.listar)//listar
router.get('/produtos/:id', controller.buscarId)
router.post('/produtos', controller.inserir)
router.put('/produtos/:id', controller.atualizar)
router.delete('/produtos/:id', controller.deletar)

module.exports = router;