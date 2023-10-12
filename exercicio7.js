function calcularFatorial(numero) {
    if (numero < 0) {
        return "O fatorial é indefinido para números negativos.";
    }

    if (numero === 0) {
        return 1;
    }

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

const numeroDoUsuario = prompt("Digite um número para calcular o fatorial:");

const numeroConvertido = parseInt(numeroDoUsuario);

const resultadoFatorial = calcularFatorial(numeroConvertido);

console.log(`O fatorial de ${numeroConvertido} é: ${resultadoFatorial}`);
