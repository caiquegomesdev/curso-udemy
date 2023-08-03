//Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

function verificarDivisivelPor3(numero) {
    if (numero % 3 === 0) {
      return true; // O número é divisível por 3
    } else {
      return false; // O número não é divisível por 3
    }
  }
  
  // Exemplo de uso da função
  var numero1 = 9;
  var numero2 = 16;
  
  console.log(verificarDivisivelPor3(numero1)); // true
  console.log(verificarDivisivelPor3(numero2)); // false
  