function calcularMedia(vetor) {
    if (vetor.length === 0) {
        return 0;
    }

    const soma = vetor.reduce((total, numero) => total + numero, 0);

    const media = soma / vetor.length;

    return media;
}

const meuVetor = [10, 5, 8, 12, 7];

const mediaDoVetor = calcularMedia(meuVetor);

console.log("A média do vetor é: " + mediaDoVetor);

