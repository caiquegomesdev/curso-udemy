//Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function verificarCaracteresComuns(string1, string2) {
   // Converter as strings para letras minúsculas
   var str1 = string1.toLowerCase();
   var str2 = string2.toLowerCase();

   // Criar um objeto para contar os caracteres de str1
   var caracteresStr1 = {};

   // Preencher o objeto com os caracteres de str1
   for (var i = 0; i < str1.length; i++) {
      var char = str1.charAt(i);
      caracteresStr1[char] = true;
   }

   // Verificar se todos os caracteres de str2 estão presentes em str1
   for (var j = 0; j < str2.length; j++) {
      var char = str2.charAt(j);
      if (!caracteresStr1[char]) {
         return false;
      }
   }

   return true;
}

// Exemplo de uso:
var palavra1 = "Hello";
var palavra2 = "olleh";
var resultado = verificarCaracteresComuns(palavra1, palavra2);
console.log(resultado);
