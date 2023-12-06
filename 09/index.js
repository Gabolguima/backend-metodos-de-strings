const nome = 'Guido Cerqueira';

function geradorNickname(nome) {
  const nomes = nome.trim().toLowerCase().split(" ");
  let = nickSemEspaco = "";

  for (const item of nomes) {
    nickSemEspaco += item;
  }
  const nickname = nickSemEspaco.slice(0, 12);
  console.log(`@${nickname}`);
}

geradorNickname(nome);