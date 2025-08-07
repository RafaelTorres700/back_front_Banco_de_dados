const express= require('express')
const router = express.Router()
const controller = require('../controller/auth.controller')

router.post('/registro', controller.register )
router.post('/login', controller.login )

module.exports = router