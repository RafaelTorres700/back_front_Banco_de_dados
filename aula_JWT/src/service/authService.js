const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const repo = require('../repository/userRepository');


const register =(login, senha, valor) =>{
// bcrypt.hash é usado para criptografar a senha antes de armazená-la no banco de dados
    bcrypt.hash(senha, 10, (erro, hash) => {
        if(erro)
            return valor(erro);
        repo.createUser(login, hash, valor);
    });
};

const login = (login, senha, valor) => {
 repo.findByLogin(login, (erro, resultado) => {
        
        if(erro || resultado.length === 0) {
            return valor({ message: 'Usuário não encontrado' });
        }
        const user = resultado[0];


        // Verifica a senha usando bcrypt.compare
        bcrypt.compare(senha, user.senha, (erro, match) => {
            if(erro || !match) {
                return valor({ message: 'Senha incorreta' });
            }

            // Gera o token JWT se a senha estiver correta
            const token = jwt.sign({ id: user.id, login: user.login }, 
                process.env.JWT_SECRET, { expiresIn: '1h' });
            return valor(null, { token });
        });
    })
}

module.exports = {
    register,
    login
};  