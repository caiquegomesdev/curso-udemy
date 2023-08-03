//Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
//elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
//-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.

function calcularRaizesBhaskara(ax2, bx, c) {
    var delta = Math.pow(bx, 2) - 4 * ax2 * c;
  
    if (delta < 0) {
      return "Delta é negativo";
    } else {
      var x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
      var x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
      return [x1, x2];
    }
  }
  
  // Exemplo de uso da função
  var ax2 = 3;
  var bx = -5;
  var c = 12;
  
  var raizes = calcularRaizesBhaskara(ax2, bx, c);
  console.log(raizes);
  