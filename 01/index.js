const comentario = "Esse COVID é muito perigoso!";

const palavraCovid = comentario.toLowerCase().includes("covid");
const palavraPandemia = comentario.toLowerCase().includes("pandemia");

if (palavraCovid || palavraPandemia) {
  console.log("Comentário bloqueado por conter palavras proibidas");
} else {
  console.log("Comentário autorizado.");
}   