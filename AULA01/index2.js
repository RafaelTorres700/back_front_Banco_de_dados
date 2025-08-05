const express = require('express')

const app = express();
//mapear uma rota home

app.get("/", (req, res) => {
res.send('olá mundo!!!')
})

app.get("/sobre",(req, res)=> {
    res.send("ESSA É A ROTA SOBRE")
});

app.get("/json", (req, res) =>{
    res.send({msg: "essa rota esta mostrando um json"})
});

app.get("/saudacao/:nome/:idade", (req, res) =>{
    const nome = req.params.nome
    const idade = req.params.idade
    res.json({usuarios: {nome, idade}})
    
});


const PORT = 3005 
app.listen(PORT, () => {
    console.log(`Serviço rodando na porte ${PORT}`)
});