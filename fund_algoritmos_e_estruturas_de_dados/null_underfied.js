let valor //nao inicilizada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString())  //ERROR

const produt = {}
console.log(produt.preco)
console.log(produt)

produt.preco = 3.50
console.log(produt)

produt.preco = undefined //evite atribuir undefined
console.log(!!produt.preco)
//delete produt.preco
console.log(produt)

produt.preco = null //sem preco
console.log(!!produt.preco)
console.log(produt)