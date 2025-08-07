// Importação dos módulos de segurança e repositório de usuários
const bcrypt = require('bcryptjs'); // Criptografia da senha
const jwt = require('jsonwebtoken'); // Geração de token JWT
const repo = require('../repository/userRepository'); // Repositório com funções de banco

/**
 * Função de registro de usuário
 * - Recebe login, senha e callback (valor)
 * - Cria hash seguro da senha com bcrypt
 * - Chama o repositório para salvar o usuário no banco
 */
const register = (login, senha, valor) => {
    // Geração do hash da senha com custo de processamento 10
    bcrypt.hash(senha, 10, (erro, hash) => {
        if (erro)
            return valor(erro); // Se falhar o hash, retorna erro

        // Usuário é criado com a senha já criptografada
        repo.createUser(login, hash, valor);
    });
};

/**
 * Função de login/autenticação
 * - Recebe login, senha e callback (valor)
 * - Busca o usuário no banco
 * - Compara a senha fornecida com a senha criptografada armazenada
 * - Se válida, gera e retorna um token JWT
 */
const login = (login, senha, valor) => {
    // Busca o usuário pelo login
    repo.findByLogin(login, (erro, resultado) => {
        if (erro || resultado.length === 0)
            return valor('Usuario não encontrado'); // Nenhum usuário com esse login

        const user = resultado[0]; // Extrai o usuário encontrado

        // Compara a senha fornecida com o hash armazenado
        bcrypt.compare(senha, user.senha, (erro, match) => {
            if (erro || !match)
                return valor('Senha Inálida!'); // Senha incorreta

            // Gera o token JWT com os dados do usuário (sem senha)
            const token = jwt.sign(
                { id: user.id, login: user.login }, // Payload
                process.env.JWT_SECRET,             // Chave secreta no .env
                { expiresIn: '1h' }                 // Expiração em 1 hora
            );

            // Retorna o token ao cliente
            valor(null, { token });
        });
    });
};

// Exporta as funções para uso externo (controller, rotas)
module.exports = { register, login };
