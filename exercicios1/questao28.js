//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function contarParesEImpares(vetor) {
    let pares = 0;
    let impares = 0;
  
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] % 2 === 0) {
        pares++;
      } else {
        impares++;
      }
    }
  
    console.log("Quantidade de números pares:", pares);
    console.log("Quantidade de números ímpares:", impares);
}
  
// Exemplo de uso da função
let numeros = [2, 5, 8, 9, 12, 15, 16];
contarParesEImpares(numeros);
  