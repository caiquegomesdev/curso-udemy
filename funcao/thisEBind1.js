const pessoa = {
    saudacao: 'Bom Dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 

