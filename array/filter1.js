const produtos = [
    {nome: ' NoteBook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4499, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.nome 
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil));