const BASE_URL = "http://localhost:3010/auth";

// REGISTRO
async function registrar() {
  const login = document.getElementById('registerLogin').value;
  const senha = document.getElementById('registerSenha').value;

  const res = await fetch(`${BASE_URL}/registro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login, senha })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Usuário cadastrado com sucesso!");
    
  } else {
    alert("Erro no cadastro: " + data.erro);
  }
}

// LOGIN
async function logar() {
  const login = document.getElementById('loginLogin').value;
  const senha = document.getElementById('loginSenha').value;

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login, senha })
  });

  const data = await res.json();
  if (res.ok) {
    document.getElementById('token').value = data.token;
    alert("Login realizado com sucesso!");
    // window.location.href = "adm.html";
  } else {
    alert("Erro ao logar: " + data.erro);
  }
}