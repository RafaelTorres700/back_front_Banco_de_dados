fetch('http://localhost:3006/cliente')
.then(res => res.json())
.then(cliente => {
    const container = document.getElementById('clientes-container');
    cliente.forEach(cliente => {
        const div = document.createElement('div');
        div.className = 'cliente';
        div.innerHTML = `Nome: <strong>${cliente.nome}</strong> - CPF: ${cliente.cpf}`
        container.appendChild(div)
    })
 })
 .catch(err => console.log('Erro ao conectar ao Cliente', err))
