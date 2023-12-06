let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0");

let arrayDeNomes = nome.split(" ");
let nomeFormatado = "";
for (let letra of arrayDeNomes) {
  let primeiraLetra = letra.slice(0, 1);
  let restanteDoNome = letra.slice(1);

  nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}
nome = nomeFormatado;

email = email.trim();

console.log(identificador);
console.log("");
console.log(nome);
console.log("");
console.log(email);