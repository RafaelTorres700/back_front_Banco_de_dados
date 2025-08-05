const express = require('express')
const cors = require('cors');

//body-parse - para lidar com json no corpo das rquisições
const bodyParse = require('body-parser')
const db = require('./db')


const app = express();
const PORT = 3006

app.use(cors());
app.use(bodyParse.json())

//visualizar dados na tabela - GET
app.get('/cliente', (req, res) => {
    const sql = 'select * from cliente'
    db.query(sql, (erro, resultado) => {
        if(erro)
            return res.status(500).json({erro: 'Erro ao buscar dados'})
            res.json(resultado)
    })
});
//inserir dados na tabela - POST
// app.post('/pessoa', (req, res) => {
//     const { nome, sexo } = req.body
//     const sql = 'INSERT INTO pessoa (nome, sexo) VALUE (?, ?)'
//     db.query(sql, [nome, sexo], (erro, resultado) => {
//         if(erro)
//             return res.status(500).json({erro: 'Erro ao inserir dados'})
//         res.status(201).json({mensagem: 'Pessoa inserida com sucesso', id: resultado.insertId})
//     })
// });

//atualizar dados na tabela - PUT
// app.put('/pessoa/:id', (req, res) => {  
//     const { id } = req.params
//     const { nome, sexo } = req.body
//     const sql = 'UPDATE pessoa SET nome = ?, sexo = ? WHERE id = ?'
//     db.query(sql, [nome, sexo, id], (erro, resultado) => {
//         if(erro)
//             return res.status(500).json({erro: 'Erro ao atualizar dados'})
//         res.status(201).json({mensagem: `Pessoa atualizada com sucesso`})
//     })
// });

//deletar dados na tabela - DELETE
// app.delete('/pessoa/:id', (req, res) => {
//     const { id } = req.params
//     const sql = 'DELETE FROM pessoa WHERE id = ?'
//     db.query(sql, [id], (erro, resultado) => {
//         if(erro)
//             return res.status(500).json({erro: 'Erro ao deletar dados'})
//         res.json({mensagem: 'Pessoa deletada com sucesso'})
//     })
// });



//iniciar o servidor
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta: ${PORT}`)
})