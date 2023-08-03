//Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
//como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
//numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
//3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora(num1, operador, num2) {
    let resultado;
  
    switch (operador) {
      case "+":
        resultado = num1 + num2;
        console.log("Resultado da soma: " + resultado);
        break;
      case "-":
        resultado = num1 - num2;
        console.log("Resultado da subtração: " + resultado);
        break;
      case "*":
        resultado = num1 * num2;
        console.log("Resultado da multiplicação: " + resultado);
        break;
      case "/":
        resultado = num1 / num2;
        console.log("Resultado da divisão: " + resultado);
        break;
      default:
        console.log("Operação inválida");
        break;
    }
}
  
calculadora(2, "+", 3);  // Saída: Resultado da soma: 5
calculadora(5, "-", 2);  // Saída: Resultado da subtração: 3
calculadora(4, "*", 6);  // Saída: Resultado da multiplicação: 24
calculadora(10, "/", 2); // Saída: Resultado da divisão: 5
calculadora(8, "%", 4);  // Saída: Operação inválida
  