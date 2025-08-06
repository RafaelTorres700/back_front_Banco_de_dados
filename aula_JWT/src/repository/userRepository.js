const db = require ('../config/db');

//selecionar os dados ta tabela - usuarios (login)
const findByLogin = (login, valor) => {
        const sql ='SELECT * FROM usuarios WHERE login = ?' ;
           db.query(sql, [login], valor)
};

//inserir dados na tabela login - senha
const createUser = (login, hashedpassword, valor) => {
        const sql = 'INSERT INTO usuarios (login, senha) VALUES (?, ?)';
        db.query(sql, [login, hashedpassword], valor)
}

module.exports = {
    findByLogin,
    createUser
};