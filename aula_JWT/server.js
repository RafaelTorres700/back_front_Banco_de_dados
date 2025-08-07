const app = require('./src/app')

const PORT = 3010
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})