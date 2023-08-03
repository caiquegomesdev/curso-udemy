//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: ' Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Extensivel:', Object.preventExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracah escolar Branca'
delete produto.tag
console.log ('Produto')

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
