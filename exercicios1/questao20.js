//Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
//Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function calcularCedulas(valor) {
    let cedulas = [100, 50, 10, 5, 1];
    let quantidadeCedulas = [0, 0, 0, 0, 0];
  
    for (let i = 0; i < cedulas.length; i++) {
      quantidadeCedulas[i] = Math.floor(valor / cedulas[i]);
      valor %= cedulas[i];
    }
  
    for (let i = 0; i < quantidadeCedulas.length; i++) {
      if (quantidadeCedulas[i] > 0) {
        console.log(quantidadeCedulas[i] + ' nota(s) de R$ ' + cedulas[i]);
      }
    }
}
  
// Exemplo de uso:
let valor = 18;
calcularCedulas(valor);
  