//While
let contador = 1
while (contador <=10) {
    console.log (`contador = ${contador}`)
    contador++
}

// no for primeiro coloca a variavel, depois a expressao que sera feita depois o i++ para que ele acehscentar mais 1 e nao continue rodando as linhas de codigosem parar
for (let i = 1; i <= 10; i++){
    console.log (`i = ${i}`)
}

//array
const notas = [7.5, 8.9, 5.5, 6.6, 10.0]
for(let i=0; i<notas.length; i++) {
    console.log (`nota = ${notas[i]}`)
}