function test(num) {
    if(num > 7){
        console.log(num)
    } else {
       console.log('Menor que 7') 
    }
    
    
}
//test(6)
//test(8)

function test2(num) {
    if(num > 7);// cuidado! o ponto e virgula se torna um sentenca de codigo, nao usar  com as estrutura de controle 
     {
        console.log(num)
    }
}

test2(6)
test2(8)