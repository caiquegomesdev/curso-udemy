//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

function calcularMediaAritmetica(vetor) {
    // Verificar se o vetor está vazio
    if (vetor.length === 0) {
       console.log("O vetor está vazio.");
       return;
    }
 
    // Calcular a soma dos valores do vetor
    var soma = 0;
    for (var i = 0; i < vetor.length; i++) {
       soma += vetor[i];
    }
 
    // Calcular a média aritmética
    var media = soma / vetor.length;
 
    // Imprimir a média aritmética
    console.log("A média aritmética é: " + media);
}
 
// Exemplo de uso:
var meuVetor = [5, 10, 15, 20, 25];
calcularMediaAritmetica(meuVetor);
 