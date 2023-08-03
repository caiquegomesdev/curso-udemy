// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma demodo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

function atribuirConceitos(notas) {
   var conceitos = [];

   for (var i = 0; i < notas.length; i++) {
      var nota = notas[i];
      var conceito;

      if (nota >= 0 && nota <= 4.9) {
         conceito = 'D';
      } else if (nota >= 5 && nota <= 6.9) {
         conceito = 'C';
      } else if (nota >= 7 && nota <= 8.9) {
         conceito = 'B';
      } else if (nota >= 9 && nota <= 10) {
         conceito = 'A';
      } else {
         conceito = 'Nota inválida';
      }

      conceitos.push(conceito);
   }

   return conceitos;
}

// Exemplo de uso
var notas = [8.2, 6.5, 9.8, 5.2, 7.7];
var conceitos = atribuirConceitos(notas);

for (var i = 0; i < notas.length; i++) {
   console.log("Nota:", notas[i], "Conceito:", conceitos[i]);
}
