const notas = [6.6, 7.4, 9.8, 8.1, 7.7, 8.5]
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa =  {
    nome: 'Fernada',
    sobrenome: 'Souza',
    idade: 25,
    peso: 62
}
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}