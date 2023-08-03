//Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imprimirNumerosImpares(inicio = 0, fim = 100) {
   // Verificar a ordem dos parâmetros e corrigir, se necessário
   if (inicio > fim) {
      var temp = inicio;
      inicio = fim;
      fim = temp;
   }

   // Imprimir os números ímpares entre início e fim
   for (var i = inicio; i <= fim; i++) {
      if (i % 2 !== 0) {
         console.log(i);
      }
   }
}

// Exemplo de uso com valores padrão (0 e 100)
imprimirNumerosImpares();

// Exemplo de uso com valores específicos (10 e 30)
imprimirNumerosImpares(10, 30);
