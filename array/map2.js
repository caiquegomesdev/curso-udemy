const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

];
//MINHA FORMA DE RESOLVER O DESAFIO
const precos = carrinho.map(item => JSON.parse(item).preco)
console.log(precos)


// FORMA DO PROFESSOR RESOLVER O DESAFIO
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)