//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function classificarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
      return "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }
  
  // Exemplo de uso da função:
  var lado1 = 5;
  var lado2 = 7;
  var lado3 = 9;
  var classificacao = classificarTriangulo(lado1, lado2, lado3);
  console.log("Classificação:", classificacao);
  