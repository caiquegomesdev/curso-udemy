//Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
//registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
//mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
//pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
//vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
//jogo. (Número do pior jogo)

function analisarPontuacoes(pontuacoes) {
    var pontuacoesArray = pontuacoes.split(" ").map(Number); // Converte a string em um array de números
    var maiorPontuacao = pontuacoesArray[0];
    var menorPontuacao = pontuacoesArray[0];
    var recorde = 0;
    var piorJogo = 0;
  
    for (var i = 1; i < pontuacoesArray.length; i++) {
      if (pontuacoesArray[i] > maiorPontuacao) {
        maiorPontuacao = pontuacoesArray[i];
        recorde++;
      } else if (pontuacoesArray[i] < menorPontuacao) {
        menorPontuacao = pontuacoesArray[i];
        piorJogo = i;
      }
    }
  
    return [recorde, piorJogo + 1]; // Adiciona 1 ao número do pior jogo para ajustar a indexação base 0 para base 1
  }
  
  // Exemplo de uso da função
  var pontuacoes = "10 8 12 14 6 16 9 10";
  var resultado = analisarPontuacoes(pontuacoes);
  console.log("Número de vezes que bateu o recorde: " + resultado[0]);
  console.log("Número do pior jogo: " + resultado[1]);
  