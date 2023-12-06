const cpf = "011.022.033-44";

function removeCaractereEspecial(numero) {
  let numeros = numero.replace("-", "").replace("/", "").split(".");
  let numeroLimpo = "";

  for (const item of numeros) {
    numeroLimpo += item;
  }
  console.log(numeroLimpo);
}

removeCaractereEspecial(cpf);