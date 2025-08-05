
const apiUrl = "http://localhost:3008/produtos";

function buscar() {
  // 1. Corrigido para .value e convertido para minúsculas.
  const filtro = document.getElementById("filtro-nome").value.toLowerCase();

  fetch(apiUrl)
    .then((res) => {
      // Adicionado tratamento de erro caso a resposta da API não seja 'OK'.
      if (!res.ok) {
        throw new Error(`Erro na requisição: ${res.statusText}`);
      }
      return res.json();
    })
    .then((produtos) => {
      // 2. A lógica de filtro foi corrigida para usar .includes().
      const resultado = produtos.filter((c) =>
        c.nome.toLowerCase().includes(filtro)
      );

      const tabela = document.getElementById("resultado-tabela");
      tabela.innerHTML = ""; // Limpa a tabela para novos resultados.

      // 3. Toda a lógica de exibição foi movida para dentro do .then().
      if (resultado.length === 0) {
        tabela.innerHTML = `<tr><td colspan="4">Nenhum produto encontrado</td></tr>`;
      } else {
        resultado.forEach((c) => {
          const linha = document.createElement("tr");
          linha.innerHTML = `
            <td>${c.id}</td>
            <td>${c.nome}</td>
            <td>${c.preco}</td>
            <td>${c.estoque}</td>`;
          tabela.appendChild(linha);
        });
      }
    })
    .catch((error) => {
      // Adicionado um bloco .catch para tratar possíveis erros de rede ou da API.
      console.error("Falha ao buscar produtos:", error);
      const tabela = document.getElementById("resultado-tabela");
      tabela.innerHTML = `<tr><td colspan="4">Erro ao carregar os dados. Tente novamente mais tarde.</td></tr>`;
    });
}