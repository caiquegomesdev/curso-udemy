//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function divisao(dividendo, divisor) {
    return dividendo / divisor;
}
console.log(divisao(2, 3));


function realizarDivisao(dividendo, divisor) {
    var resultado = Math.floor(dividendo / divisor);
    var resto = dividendo % divisor;
  
    console.log("Resultado da divisão:", resultado);
    console.log("Resto da divisão:", resto);
}

// Exemplo de uso da função:
  realizarDivisao(10, 3);
  