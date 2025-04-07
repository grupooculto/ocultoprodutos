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
  { nome: "Lockpick Cobre", limpo: 15000, sujo: 19500, limpoParceiro: 11250, sujoParceiro: 14625 },
  { nome: "Longbook", limpo: 30000, sujo: 39000, limpoParceiro: 22500, sujoParceiro: 29250 },
  { nome: "Macbook", limpo: 30000, sujo: 39000, limpoParceiro: 22500, sujoParceiro: 29250 },
  { nome: "Nitro", limpo: 35000, sujo: 45500, limpoParceiro: 26250, sujoParceiro: 34125 },
  { nome: "Pager", limpo: 40000, sujo: 52000, limpoParceiro: 30000, sujoParceiro: 39000 },
  { nome: "Chip", limpo: 5000, sujo: 6500, limpoParceiro: 3750, sujoParceiro: 4875 }
];

const tbody = document.getElementById('produtos');

produtos.forEach((produto, index) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${produto.nome}</td>
    <td class="limpo">R$ 0,00</td>
    <td class="sujo">R$ 0,00</td>
    <td class="limpo-parceiro">R$ 0,00</td>
    <td class="sujo-parceiro">R$ 0,00</td>
    <td><input type="number" min="0" value="0" onchange="atualizaValor(${index}, this.value)"></td>
  `;
  tbody.appendChild(tr);
});

const totais = {
  limpo: 0,
  sujo: 0,
  limpoParceiro: 0,
  sujoParceiro: 0
};

const totalDiv = document.createElement('div');
totalDiv.classList.add('total-geral');
document.body.appendChild(totalDiv);

function atualizaValor(index, qtd) {
  qtd = parseInt(qtd) || 0;

  const produto = produtos[index];
  const tr = tbody.children[index];
  
  const totalLimpo = produto.limpo * qtd;
  const totalSujo = produto.sujo * qtd;
  const totalLimpoParceiro = produto.limpoParceiro * qtd;
  const totalSujoParceiro = produto.sujoParceiro * qtd;

  tr.querySelector('.limpo').textContent = `R$ ${totalLimpo.toLocaleString('pt-BR')}`;
  tr.querySelector('.sujo').textContent = `R$ ${totalSujo.toLocaleString('pt-BR')}`;
  tr.querySelector('.limpo-parceiro').textContent = `R$ ${totalLimpoParceiro.toLocaleString('pt-BR')}`;
  tr.querySelector('.sujo-parceiro').textContent = `R$ ${totalSujoParceiro.toLocaleString('pt-BR')}`;

  calcularTotais();
}

function calcularTotais() {
  totais.limpo = 0;
  totais.sujo = 0;
  totais.limpoParceiro = 0;
  totais.sujoParceiro = 0;

  Array.from(tbody.children).forEach((tr, index) => {
    const input = tr.querySelector('input');
    const qtd = parseInt(input.value) || 0;
    const produto = produtos[index];

    totais.limpo += produto.limpo * qtd;
    totais.sujo += produto.sujo * qtd;
    totais.limpoParceiro += produto.limpoParceiro * qtd;
    totais.sujoParceiro += produto.sujoParceiro * qtd;
  });

  totalDiv.innerHTML = `
    <h2>Total:</h2>
    <p>Limpo: R$ ${totais.limpo.toLocaleString('pt-BR')}</p>
    <p>Sujo: R$ ${totais.sujo.toLocaleString('pt-BR')}</p>
    <p>Limpo Parceiro: R$ ${totais.limpoParceiro.toLocaleString('pt-BR')}</p>
    <p>Sujo Parceiro: R$ ${totais.sujoParceiro.toLocaleString('pt-BR')}</p>
  `;
}
