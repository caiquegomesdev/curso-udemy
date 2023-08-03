//Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

// Criar os vetores
var vetorInteiro = [1, 2, 3, 4];
var vetorString = ["a", "b", "c", "d"];
var vetorDouble = [1.1, 2.2, 3.3, 4.4];

// Unir vetorInteiro e vetorString
var resultado1 = vetorInteiro.concat(vetorString);
console.log("Resultado 1: " + resultado1);

// Unir vetorInteiro, vetorString e vetorDouble
var resultado2 = vetorInteiro.concat(vetorString, vetorDouble);
console.log("Resultado 2: " + resultado2);
