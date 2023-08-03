//Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar

function trocarElementos(vetorA, vetorB) {
   if (vetorA.length !== vetorB.length) {
      console.log("Os vetores não possuem o mesmo tamanho.");
      return;
   }

   for (var i = 0; i < vetorA.length; i++) {
      vetorA[i] = vetorA[i] + vetorB[i];
      vetorB[i] = vetorA[i] - vetorB[i];
      vetorA[i] = vetorA[i] - vetorB[i];
   }

   console.log("Vetor A após a troca:", vetorA);
   console.log("Vetor B após a troca:", vetorB);
}

// Exemplo de uso
var vetorA = [1, 2, 3, 4, 5];
var vetorB = [6, 7, 8, 9, 10];

console.log("Vetor A antes da troca:", vetorA);
console.log("Vetor B antes da troca:", vetorB);

trocarElementos(vetorA, vetorB);
