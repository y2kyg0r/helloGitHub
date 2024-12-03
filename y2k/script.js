// Recupera o valor de calorias e os itens da tabela armazenados no localStorage
let caloriasTotal = localStorage.getItem('caloriasTotal') ? parseInt(localStorage.getItem('caloriasTotal')) : 0;
let alimentos = localStorage.getItem('alimentos') ? JSON.parse(localStorage.getItem('alimentos')) : [];

// Função para atualizar a tabela de alimentos e o total de calorias
function atualizarTabela() {
  const tabelaCorpo = document.getElementById('corpo-tabela');
  tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de preencher

  alimentos.forEach((alimento, index) => {
    const linha = document.createElement('tr');
    const nomeCell = document.createElement('td');
    const caloriasCell = document.createElement('td');

    nomeCell.textContent = alimento.nome;
    caloriasCell.textContent = alimento.calorias;

    linha.appendChild(nomeCell);
    linha.appendChild(caloriasCell);
    tabelaCorpo.appendChild(linha);
  });

  // Atualiza o total de calorias
  document.getElementById('calorias').textContent = caloriasTotal;
  localStorage.setItem('caloriasTotal', caloriasTotal); // Atualiza o total de calorias no localStorage
  localStorage.setItem('alimentos', JSON.stringify(alimentos)); // Atualiza os alimentos no localStorage
}

// Função para adicionar um alimento à lista
document.getElementById('adicionar-calorias').addEventListener('click', () => {
  const nomeComida = document.getElementById('nome-comida').value;
  const caloriasInput = document.getElementById('input-calorias').value;

  if (nomeComida && caloriasInput && !isNaN(caloriasInput)) {
    // Adiciona o alimento à lista
    alimentos.push({ nome: nomeComida, calorias: parseInt(caloriasInput) });
    caloriasTotal += parseInt(caloriasInput); // Atualiza o total de calorias
    document.getElementById('nome-comida').value = ''; // Limpa o campo do nome
    document.getElementById('input-calorias').value = ''; // Limpa o campo de calorias
    atualizarTabela(); // Atualiza a tabela e o total
  } else {
    alert('Por favor, insira um nome e uma quantidade válida de calorias.');
  }
});

// Função para resetar os dados
document.getElementById('resetar-calorias').addEventListener('click', () => {
  caloriasTotal = 0;
  alimentos = [];
  atualizarTabela(); // Atualiza a tabela e o total
});

// Inicializa a página com os dados armazenados
atualizarTabela();
