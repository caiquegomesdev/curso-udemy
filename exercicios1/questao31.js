//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetore imprime a quantidade no console.

function contarNumerosNegativos(vetor) {
    // Inicializar o contador
    var contador = 0;
 
    // Percorrer o vetor
    for (var i = 0; i < vetor.length; i++) {
       // Verificar se o número é negativo
       if (vetor[i] < 0) {
          // Incrementar o contador
          contador++;
       }
    }
 
    // Imprimir a quantidade de números negativos
    console.log("A quantidade de números negativos é: " + contador);
 }
 
// Exemplo de uso:
var meuVetor = [-2, 5, -7, 0, -1, 9, -4];
contarNumerosNegativos(meuVetor);
 