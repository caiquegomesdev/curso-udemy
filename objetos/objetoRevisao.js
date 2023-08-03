// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'GamerMAx'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro ={
    modelo: 'Celta',
    valor: 2009,
    proprietario: {
        nome: 'Gomes',
        idade: 23,
        endereco: {
            logradouro: 'Rua 24 de Agosto',
            numero: 242
        },
        condutores: [{
            nome: 'João',
            idade: 23
        }, {
            nome: 'Maria',
            idade: 56
        }],
        calcularValorSeguro: function(){
            //...
        }
    }
}

carro.proprietario.endereco.numero =  1000
carro['proprietario'] ['endereco'] ['logradouro'] = 'Piraja'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)