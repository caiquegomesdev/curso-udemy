const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro: 'RuA da luZ',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n,i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado)

const {endereco: { logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)