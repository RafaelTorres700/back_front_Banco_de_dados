const service = require('../service/authService')

const register = (req, res) => {
    const { login, senha } = req.body;
    service.register(login, senha, (erro, resultado) => {
        if(erro)
            return res.status(500).json({ erro: erro })
        res.status(201).json({ mensagem: 'Usuário registrado com sucesso!' })
    })

}

const login = (req, res) => {
   const {login, senha} = req.body;
   service.login(login, senha, (erro, resultado) => {
        if(erro)
            return res.status(4001).json({ erro: erro })
        res.status(200).json(resultado)
   });
}
module.exports = { register, login }