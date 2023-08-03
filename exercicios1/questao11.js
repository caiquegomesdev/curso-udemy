//As regras para o cálculo dos anos bissextos são as seguintes:
//De 4 em 4 anos é ano bissexto;
//De 100 em 100 anos não é ano bissexto;
//De 400 em 400 anos é ano bissexto;
//Prevalecem as últimas regras sobre as primeiras.
//Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
//mensagem e retornando true ou false.

function eAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      console.log(ano + " é um ano bissexto.");
      return true;
    } else {
      console.log(ano + " não é um ano bissexto.");
      return false;
    }
}
// Exemplo de uso:
console.log(eAnoBissexto(2020)); // Saída: 2020 é um ano bissexto. true
console.log('________________________')
console.log(eAnoBissexto(2021)); // Saída: 2021 não é um ano bissexto. false
console.log('________________________')
console.log(eAnoBissexto(1900)); // Saída: 1900 não é um ano bissexto. false
console.log('________________________')
console.log(eAnoBissexto(2000)); // Saída: 2000 é um ano bissexto. true
  