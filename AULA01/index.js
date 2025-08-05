const readline = require('readline')
const app = require('express')
//input - output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual o seu nome?", (nome)=>{
    console.log('Olá, ${nome}! Bem vindo ao node.js.')
    rl.close();
} )