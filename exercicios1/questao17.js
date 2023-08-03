//7) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
//Plano Aumento
//A 10%
//B 15%
//C 20%
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calcularNovoSalario(plano, salarioAtual) {
  let novoSalario;

  switch (plano) {
    case 'A':
      novoSalario = salarioAtual * 1.1; // aumento de 10%
      break;
    case 'B':
      novoSalario = salarioAtual * 1.15; // aumento de 15%
      break;
    case 'C':
      novoSalario = salarioAtual * 1.2; // aumento de 20%
      break;
    default:
      console.log('Plano inválido.');
      return;
  }

  console.log('Novo salário: ' + novoSalario.toFixed(2));
}

// Exemplo de uso da função
calcularNovoSalario('A', 2000); // Novo salário: 2200.00
calcularNovoSalario('B', 3000); // Novo salário: 3450.00
calcularNovoSalario('C', 2500); // Novo salário: 3000.00
calcularNovoSalario('D', 2000); // Plano inválido.
