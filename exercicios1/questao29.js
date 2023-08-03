//29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.


function contarNumerosNoIntervalo(vetor) {
    let dentroIntervalo = 0;
    let foraIntervalo = 0;
  
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] >= 10 && vetor[i] <= 20) {
        dentroIntervalo++;
      } else {
        foraIntervalo++;
      }
    }
  
    console.log("Quantidade de números no intervalo [10, 20]:", dentroIntervalo);
    console.log("Quantidade de números fora do intervalo [10, 20]:", foraIntervalo);
}
  
// Exemplo de uso da função
let numeros = [5, 10, 15, 20, 25, 30];
contarNumerosNoIntervalo(numeros);
  