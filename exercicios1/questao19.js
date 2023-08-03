//O cardápio de uma lanchonete é o seguinte:
//Código Descrição do Produto Preço
//100 Cachorro Quente R$ 3,00
//200 Hambúrguer Simples R$ 4,00
//300 Cheeseburguer R$ 5,50
//400 Bauru R$ 7,50
//500 Refrigerante R$ 3,50
//600 Suco R$ 2,80
//Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente

function calcularValorPedido(codigo, quantidade) {
    let valorTotal;
  
    switch (codigo) {
      case 100:
        valorTotal = 3.0 * quantidade;
        break;
      case 200:
        valorTotal = 4.0 * quantidade;
        break;
      case 300:
        valorTotal = 5.5 * quantidade;
        break;
      case 400:
        valorTotal = 7.5 * quantidade;
        break;
      case 500:
        valorTotal = 3.5 * quantidade;
        break;
      case 600:
        valorTotal = 2.8 * quantidade;
        break;
      default:
        console.log('Produto não existente.');
        return; // Encerra a função se o código do produto não existir
    }
  
    console.log('Valor total a ser pago: R$' + valorTotal.toFixed(2));
}
  
// Exemplo de uso:
calcularValorPedido(200, 2); // Output: Valor total a ser pago: R$8.00
calcularValorPedido(400, 3); // Output: Valor total a ser pago: R$22.50
calcularValorPedido(700, 1); // Output: Produto não existente.
  