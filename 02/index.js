const cpf = "12345678900";
const cnpj = "12345678000199";

const validarCpf = cpf.length;
if (validarCpf === 11) {
  console.log(`${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`);
} else {
  console.log("CPF Inválido");
}

console.log("");

const validarCnpj = cnpj.length;
if (validarCnpj === 14) {
  console.log(`${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`);
} else {
  console.log("CNPJ Inválido");
}
