//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.  

function realizarOperacoes(a, b) {
  var soma = a + b;
  var subtracao = a - b;
  var multiplicacao = a * b;
  var divisao = a / b;

  console.log("Soma:", soma);
  console.log("Subtração:", subtracao);
  console.log("Multiplicação:", multiplicacao);
  console.log("Divisão:", divisao);
}

// Exemplo de uso da função:
realizarOperacoes(10, 5);
