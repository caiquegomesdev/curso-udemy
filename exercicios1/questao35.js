//Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final das operações imprima os vetores no console.

// Criar vetorPilha
var vetorPilha = [1, 2, 3, 4, 5];

// Criar vetorAdiciona
var vetorAdiciona = [6, 7, 8, 9, 10];

// Adicionar os valores de vetorAdiciona ao vetorPilha
for (var i = 0; i < vetorAdiciona.length; i++) {
   vetorPilha.push(vetorAdiciona[i]);
}

// Mostrar vetorPilha no console
console.log("vetorPilha: " + vetorPilha);

// Mostrar vetorAdiciona no console
console.log("vetorAdiciona: " + vetorAdiciona);
