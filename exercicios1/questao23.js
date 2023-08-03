//Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

// Função para calcular a média ponderada
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMediaPonderada(nota1, nota2, nota3) {
  const peso1 = 3;
  const peso2 = 3;
  const peso3 = 4;
  
  const media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
  return media;
}

function exibirResultado(codigo, nota1, nota2, nota3, media) {
  console.log("Código do aluno:", codigo);
  console.log("Notas:", nota1, nota2, nota3);
  console.log("Média:", media);

  if (media >= 5) {
    console.log("APROVADO\n");
  } else {
    console.log("REPROVADO\n");
  }
}

function lerDadosAluno() {
  rl.question("Digite o código do aluno (negativo para sair): ", function(codigo) {
    if (codigo < 0) {
      rl.close();
      return;
    }

    rl.question("Digite a primeira nota: ", function(nota1) {
      rl.question("Digite a segunda nota: ", function(nota2) {
        rl.question("Digite a terceira nota: ", function(nota3) {
          const media = calcularMediaPonderada(parseFloat(nota1), parseFloat(nota2), parseFloat(nota3));
          exibirResultado(codigo, parseFloat(nota1), parseFloat(nota2), parseFloat(nota3), media);
          lerDadosAluno();
        });
      });
    });
  });
}

lerDadosAluno();
