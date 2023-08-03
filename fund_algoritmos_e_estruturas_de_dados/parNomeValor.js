// par nome/ valor
const saudacao = 'opa' // contexto lexico 1

function exec() {
    const saudacao = 'falaa' //contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Gomes',
    idade: 23,
    peso: 90,
    endereco: {
        logradouro: 'Rua 24 de Agosto',
        nuemro: 123
    }
}
console.log(saudacao)
console.log(exec());
console.log(cliente)