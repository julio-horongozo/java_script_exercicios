function calcularMediaMatriz(matriz) {
    if (matriz.length === 0 || matriz[0].length === 0) {
        return "A matriz está vazia.";
    }

    let soma = 0;
    let numElementos = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
            numElementos++;
        }
    }

    const media = soma / numElementos;

    return media;
}

const minhaMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const mediaDaMatriz = calcularMediaMatriz(minhaMatriz);

console.log("A média dos elementos da matriz é: " + mediaDaMatriz);
