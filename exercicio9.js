function encontrarMaiorNumero(vetor) {
    if (vetor.length === 0) {
        return "O vetor está vazio.";
    }

    let maximo = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maximo) {
            maximo = vetor[i];
        }
    }

    return maximo;
}

const meuVetor = [10, 5, 8, 12, 7];

const maiorNumero = encontrarMaiorNumero(meuVetor);

console.log("O maior número do vetor é: " + maiorNumero);
