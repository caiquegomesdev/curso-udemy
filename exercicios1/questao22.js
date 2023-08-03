//Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calcularValorAnuidade(mes, valorAnuidade) {
    var taxaJuros = 0.05; // 5% de juros mensais
    var mesesPassados = mes - 1; // Meses decorridos desde janeiro
    var valorTotal = valorAnuidade * Math.pow(1 + taxaJuros, mesesPassados);
  
    return valorTotal;
}
  
// Exemplo de uso
var mesPago = 6; // junho
var valorAnuidade = 1000;
var valorPago = calcularValorAnuidade(mesPago, valorAnuidade);
console.log("Valor a ser pago: R$" + valorPago.toFixed(2));
  