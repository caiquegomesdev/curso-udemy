//Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(4));
//--------------------------------------
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
  // Exemplo de uso:
  console.log(calcularFatorial(5)); // Saída: 120
  console.log(calcularFatorial(0)); // Saída: 1
  console.log(calcularFatorial(1)); // Saída: 1
  console.log(calcularFatorial(10)); // Saída: 3628800
  