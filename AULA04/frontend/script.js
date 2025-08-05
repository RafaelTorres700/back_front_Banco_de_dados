const apiUrl = 'http://localhost:3008/clientes'; // ajuste a porta se necessário

const form = document.getElementById('cliente-form');
const tabela = document.getElementById('tabela-clientes');

function carregarClientes() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(clientes => {
      tabela.innerHTML = '';
      clientes.forEach(c => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
          <td>${c.id}</td>
          <td>${c.nome}</td>
          <td>${c.cpf}</td>
          <td>${c.sexo}</td>
          <td>
            <button onclick="editar(${c.id}, '${c.nome}', '${c.cpf}', '${c.sexo}')">✏️</button>
            <button onclick="excluir(${c.id})">🗑️</button>
          </td>
        `;
        tabela.appendChild(linha);
      });
    });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('cliente-id').value;
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const sexo = document.getElementById('sexo').value;

  const cliente = { nome, cpf, sexo };

  const metodo = id ? 'PUT' : 'POST';
  const url = id ? `${apiUrl}/${id}` : apiUrl;

  fetch(url, {
    method: metodo,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente)
  })
    .then(() => {
      form.reset();
      carregarClientes();
    });
});

function editar(id, nome, cpf, sexo) {
  document.getElementById('cliente-id').value = id;
  document.getElementById('nome').value = nome;
  document.getElementById('cpf').value = cpf;
  document.getElementById('sexo').value = sexo;
}

function excluir(id) {
  if (confirm('Tem certeza que deseja excluir?')) {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    }).then(() => carregarClientes());
  }
}

carregarClientes();