function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Parabens!' + ' aprovado com ' + nota )
    } else {
        console.log("nao foi dessa vez " + 'sua nota foi' + nota )
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVredadeEuFalo(valor){
    if(valor) {
        console.log('E verdade' + valor)
    }
}

seForVredadeEuFalo()
seForVredadeEuFalo(null)
seForVredadeEuFalo(undefined)
seForVredadeEuFalo(NaN)
seForVredadeEuFalo('')
seForVredadeEuFalo(0)
seForVredadeEuFalo(-1)
seForVredadeEuFalo(' ')
seForVredadeEuFalo('?')
seForVredadeEuFalo([])
seForVredadeEuFalo([1, 2])
seForVredadeEuFalo({})