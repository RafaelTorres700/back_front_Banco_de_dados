const express = require('express')
const cors = require('cors')

const app = express()

//app.use(cors())
app.use(cors({
  origin: '*', // ou especifique: 'http://127.0.0.1:5500'
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())//body-parser

const authRoutes = require('./routes/authRoutes')
app.use('/auth', authRoutes)

module.exports = app