let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let maiorNumero;

if (numero1 > numero2) {
  maiorNumero = numero1;
} else if (numero2 > numero1) {
  maiorNumero = numero2;
} else {
  maiorNumero = "Os números são iguais";
}

console.log("O maior número é: " + maiorNumero);
