const nomeArquivo = 'Foto da Familia.pdf'; // exemplo 1
// const nomeArquivo = 'Foto da Familia.png'; //exemplo 2

function validarArquivo(arquivo) {
  const extensao = arquivo.slice(arquivo.lastIndexOf(".") + 1);

  if (extensao === "jpg" || extensao === "jpeg" || extensao === "gif" || extensao === "png") {
    console.log("Arquivo válido");
  } else {
    console.log("Arquivo inválido");
  }
}

validarArquivo(nomeArquivo);