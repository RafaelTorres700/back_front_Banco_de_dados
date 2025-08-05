const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FU640404fu$',
    database: 'loja'
})
conexao.connect((erro) => {
    if(erro)
        console.log('Erro ao se conectar ao banco:', erro.message);
        console.log('Conectado ao banco Loja');
})
module.exports = conexao;