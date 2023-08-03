// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

// Função que multiplica cada elemento do vetor pelo número passado como parâmetro
function multiplicarVetor(vetor, numero) {
   var novoVetor = [];
   for (var i = 0; i < vetor.length; i++) {
      novoVetor.push(vetor[i] * numero);
   }
   return novoVetor;
}

// Função que multiplica apenas os elementos maiores que 5 do vetor pelo número passado como parâmetro
function multiplicarVetorMaioresQue5(vetor, numero) {
   var novoVetor = [];
   for (var i = 0; i < vetor.length; i++) {
      if (vetor[i] > 5) {
         novoVetor.push(vetor[i] * numero);
      } else {
         novoVetor.push(vetor[i]);
      }
   }
   return novoVetor;
}

// Exemplo de uso
var meuVetor = [2, 4, 6, 8, 10];
var numero = 3;

var resultado1 = multiplicarVetor(meuVetor, numero);
console.log("Resultado 1:", resultado1);

var resultado2 = multiplicarVetorMaioresQue5(meuVetor, numero);
console.log("Resultado 2:", resultado2);
