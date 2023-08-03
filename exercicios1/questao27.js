//Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 === altura2) {
      console.log("As crianças têm alturas iguais.");
      return;
    }
  
    if (altura1 > altura2) {
      let anos = 0;
      while (altura1 >= altura2) {
        altura1 += taxa1;
        altura2 += taxa2;
        anos++;
      }
      console.log("A criança menor ultrapassará a maior em", anos, "anos.");
    } else {
      let anos = 0;
      while (altura2 >= altura1) {
        altura1 += taxa1;
        altura2 += taxa2;
        anos++;
      }
      console.log("A criança menor ultrapassará a maior em", anos, "anos.");
    }
}
  
// Exemplo de uso da função
calcularCrescimento(120, 5, 130, 3);
  