// pessoa -> endereco ->{...}
const pessoa = { nome: 'Gomes'}
pessoa.nome = 'Caique'
console.log(pessoa)

// pessoa -> endereco ->{...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // congela o objeto (o objeto se torna constante (inalteravel))

pessoa.nome = 'Saint'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Constantino'})
pessoaConstante.nome = 'Jose'
console.log(pessoaConstante)
