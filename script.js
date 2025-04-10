const produtos = [
  { nome: "Cartão Raro", limpo: 15000, sujo: 19500, limpoParceiro: 11250, sujoParceiro: 14625 },
  { nome: "Cartão in-Comum", limpo: 20000, sujo: 26000, limpoParceiro: 15000, sujoParceiro: 19500 },
  { nome: "Cartão Comum", limpo: 30000, sujo: 39000, limpoParceiro: 22500, sujoParceiro: 29250 },
  { nome: "Cartão Normal", limpo: 55000, sujo: 71500, limpoParceiro: 41250, sujoParceiro: 53625 },
  { nome: "Cartão Lendário", limpo: 60000, sujo: 78000, limpoParceiro: 45000, sujoParceiro: 58500 },
  { nome: "Pen Drive", limpo: 65000, sujo: 84500, limpoParceiro: 48750, sujoParceiro: 63375 },
  { nome: "Alicate", limpo: 4000, sujo: 5200, limpoParceiro: 3000, sujoParceiro: 3900 },
  { nome: "C4", limpo: 9000, sujo: 12500, limpoParceiro: 8000, sujoParceiro: 11001 },
  { nome: "Bloqueador", limpo: 10000, sujo: 13000, limpoParceiro: 7500, sujoParceiro: 9750 },
  { nome: "Placa", limpo: 10000, sujo: 13000, limpoParceiro: 7500, sujoParceiro: 9750 },
  { nome: "Ticket", limpo: 7000, sujo: 9100, limpoParceiro: 5250, sujoParceiro: 6825 },
  { nome: "Lockpick Aluminio", limpo: 10000, sujo: 13000, limpoParceiro: 7500, sujoParceiro: 9750 },
  { nome: "Lockpick Cobre", limpo: 6500, sujo: 8125, limpoParceiro: 5000, sujoParceiro: 6250 },
  { nome: "Longbook", limpo: 30000, sujo: 39000, limpoParceiro: 22500, sujoParceiro: 29250 },
  { nome: "Macbook", limpo: 30000, sujo: 39000, limpoParceiro: 22500, sujoParceiro: 29250 },
  { nome: "Nitro", limpo: 35000, sujo: 45500, limpoParceiro: 26250, sujoParceiro: 34125 },
  { nome: "Pager", limpo: 40000, sujo: 52000, limpoParceiro: 30000, sujoParceiro: 39000 },
  { nome: "Chip", limpo: 5000, sujo: 6500, limpoParceiro: 3750, sujoParceiro: 4875 }
];

const tbody = document.getElementById('produtos');
const totalLimpo = document.getElementById('total-limpo');
const totalSujo = document.getElementById('total-sujo');
const totalLimpoParceiro = document.getElementById('total-limpo-parceiro');
const totalSujoParceiro = document.getElementById('total-sujo-parceiro');

// Preencher a tabela com produtos
produtos.forEach((produto, index) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${produto.nome}</td>
    <td class="limpo">R$ ${(produto.limpo * 0).toLocaleString('pt-BR')}</td>
    <td class="sujo">R$ ${(produto.sujo * 0).toLocaleString('pt-BR')}</td>
    <td class="limpo-parceiro">R$ ${(produto.limpoParceiro * 0).toLocaleString('pt-BR')}</td>
    <td class="sujo-parceiro">R$ ${(produto.sujoParceiro * 0).toLocaleString('pt-BR')}</td>
    <td><input type="number" min="0" value="0" onchange="atualizaValor(${index}, this.value)"></td>
  `;
  tbody.appendChild(tr);
});

// Atualizar valores e totais
function atualizaValor(index, qtd) {
  const produto = produtos[index];
  const tr = tbody.children[index];

  const limpo = produto.limpo * qtd;
  const sujo = produto.sujo * qtd;
  const limpoParceiro = produto.limpoParceiro * qtd;
  const sujoParceiro = produto.sujoParceiro * qtd;

  tr.querySelector('.limpo').textContent = `R$ ${limpo.toLocaleString('pt-BR')}`;
  tr.querySelector('.sujo').textContent = `R$ ${sujo.toLocaleString('pt-BR')}`;
  tr.querySelector('.limpo-parceiro').textContent = `R$ ${limpoParceiro.toLocaleString('pt-BR')}`;
  tr.querySelector('.sujo-parceiro').textContent = `R$ ${sujoParceiro.toLocaleString('pt-BR')}`;

  calcularTotais();
}

// Calcular os totais
function calcularTotais() {
  let totalLimpoValor = 0, totalSujoValor = 0, totalLimpoParceiroValor = 0, totalSujoParceiroValor = 0;

  produtos.forEach((produto, index) => {
    const qtd = tbody.children[index].querySelector('input').value;
    totalLimpoValor += produto.limpo * qtd;
    totalSujoValor += produto.sujo * qtd;
    totalLimpoParceiroValor += produto.limpoParceiro * qtd;
    totalSujoParceiroValor += produto.sujoParceiro * qtd;
  });

  totalLimpo.textContent = `R$ ${totalLimpoValor.toLocaleString('pt-BR')}`;
  totalSujo.textContent = `R$ ${totalSujoValor.toLocaleString('pt-BR')}`;
  totalLimpoParceiro.textContent = `R$ ${totalLimpoParceiroValor.toLocaleString('pt-BR')}`;
  totalSujoParceiro.textContent = `R$ ${totalSujoParceiroValor.toLocaleString('pt-BR')}`;
}
