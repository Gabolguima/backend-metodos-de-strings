const validaEmail = (email) => {
  let emailValido = true;

  if (email.indexOf("@") < 0) {
    emailValido = false;
  } else if (email.indexOf(".") < 0) {
    emailValido = false;
  } else if (email.indexOf(".") === 0) {
    emailValido = false;
  } else if (email.lastIndexOf(".") === email.length - 1) {
    emailValido = false;
  }

  if (emailValido) {
    console.log("E-mail válido");
  } else {
    console.log("E-mail inválido");
  }
}

validaEmail("jose@cubos.academy");
validaEmail("jose@cubos.academy.b");
validaEmail("jose.messias@cubos.academy");
validaEmail("jose.messias@cubos.io");
validaEmail("jose@cubos");
validaEmail("jose.messias@cubos");
validaEmail("jose.messias@.");
validaEmail("jose.@cubos");
validaEmail(".@");
validaEmail("@.");
validaEmail("jose.messias@cubos.");
validaEmail(".messias@cubos.");
validaEmail(".messias@cubos");