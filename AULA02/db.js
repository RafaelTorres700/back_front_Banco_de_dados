//conexão ao banco de dados
const mysql = require('mysql2')

//criar a conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FU640404fu$',
    database: 'empresa4'
});
//mensaagem da conexão
conexao.connect((errado) => {
    if(errado){
        console.log('Errro ao conectar ao MYSQL', errado)
    }
    else{
        console.log('Conectado ao banco de dados MYSQL')
    }
});
module.exports = conexao