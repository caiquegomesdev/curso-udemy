function criarProduto (nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Caneta', 7.99))
console.log(criarProduto('Pc', 7.999))
console.log(criarProduto('Smartphone', 3.999))