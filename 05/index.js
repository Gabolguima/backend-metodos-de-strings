const numeroCartao = '1111222233334444';

const numeroCartaoFormatado = numeroCartao.replaceAll("3", "2");
const novoNumeroCartao = numeroCartaoFormatado.replaceAll("2", "*");
console.log(novoNumeroCartao);