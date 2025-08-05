const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const produtoRoutes = require('./routes/produtoRoutes')
app.use('/', produtoRoutes)

module.exports = app;