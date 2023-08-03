//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.
// Função para calcular o montante com juros simples

function calcularMontanteJurosSimples(capitalInicial, taxaJuros, tempo) {
    var montante = capitalInicial + (capitalInicial * taxaJuros * tempo);
    return montante;
  }
  
  // Função para calcular o montante com juros compostos
  function calcularMontanteJurosCompostos(capitalInicial, taxaJuros, tempo) {
    var montante = capitalInicial * Math.pow(1 + taxaJuros, tempo);
    return montante;
  }
  
  // Exemplo de uso das funções
  var capitalInicial = 1000; // Capital inicial de R$ 1000
  var taxaJuros = 0.05; // Taxa de juros de 5% (0.05)
  var tempo = 2; // Tempo de aplicação de 2 anos
  
  var montanteJurosSimples = calcularMontanteJurosSimples(capitalInicial, taxaJuros, tempo);
  var montanteJurosCompostos = calcularMontanteJurosCompostos(capitalInicial, taxaJuros, tempo);
  
  console.log("Montante com juros simples: " + montanteJurosSimples);
  console.log("Montante com juros compostos: " + montanteJurosCompostos);
  