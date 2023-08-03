const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado!')
    } else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4);
imprimirResultado(5);
imprimirResultado('Epa!')//Como a linguagem e fracamente tipada ela vai deixar passar qualquer tipo de dados entao tome cuidado!;