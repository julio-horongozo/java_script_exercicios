let nota = parseFloat(prompt("Digite a nota do aluno:"));

if (nota < 6) {
  console.log("Reprovado");
} else if (nota < 8) {
  console.log("Aprovado");
} else {
  console.log("Aprovado com louvor");
}
