function calcularSomaMatriz(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

const minhaMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const somaDaMatriz = calcularSomaMatriz(minhaMatriz);

console.log("A soma dos elementos da matriz é: " + somaDaMatriz);
