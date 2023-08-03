const imprimirResultado = function (nota) { 
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // break ´é importante para parar a linah de codigo caso nao fosse colocado o break todas as linhas seriam executada... entao ele ler o primeiro "case" e para no break relacionado ao primeiro case 
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log ('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log ('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }
    console.log('===================') //fim
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.25)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(0)