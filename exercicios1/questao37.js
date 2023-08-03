// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos
// Função para progressão aritmética
function progressaoAritmetica(n, a1, r) {
   var termos = [];
   var soma = 0;
   for (var i = 0; i < n; i++) {
      var termo = a1 + (i * r);
      termos.push(termo);
      soma += termo;
   }
   console.log("Termos da progressão aritmética:", termos);
   console.log("Soma dos elementos:", soma);
}

// Função para progressão geométrica
function progressaoGeometrica(n, a1, r) {
   var termos = [];
   var soma = 0;
   for (var i = 0; i < n; i++) {
      var termo = a1 * Math.pow(r, i);
      termos.push(termo);
      soma += termo;
   }
   console.log("Termos da progressão geométrica:", termos);
   console.log("Soma dos elementos:", soma);
}

// Exemplo de uso para progressão aritmética
console.log("Progressão Aritmética:");
progressaoAritmetica(5, 2, 3);

// Exemplo de uso para progressão geométrica
console.log("Progressão Geométrica:");
progressaoGeometrica(5, 2, 3);
