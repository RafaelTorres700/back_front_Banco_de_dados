const express = require('express')
const router = express.Router() //rotas do express
const controller = require('../controller/clenteController')

router.get('/clientes', controller.listar)//listar
router.get('/clientes/:id', controller.buscarId)
router.post('/clientes', controller.inserir)
router.put('/clientes/:id', controller.atualizar)
router.delete('/clientes/:id', controller.deletar)

module.exports = router;