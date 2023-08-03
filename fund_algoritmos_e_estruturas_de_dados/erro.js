//Try , Catch, Throw
// Interessante utilizar para que o erro nao seja lançado de vez para o usuario

function tratarErroELancar(erro){
    //throw new Error('....')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome : erro.nome,
        msg : erro.message,
        date : new Date
    }
}

function imprimirNomeGritado(obj){
    try{ //try e um bloco que potencialmente pode gerar algum tipo de erro 
        console.log(obj.name.toUpperCase() +'!!!!!'); 
    } catch(e){ // catch trata o erro no try 
        tratarErroELancar(e)
    } finally{ // finally sempre sera excutado mesmo que esteja certo ou errado
        console.log('Final')
    }
   
}

const obj = {name: 'Gomes'}
imprimirNomeGritado(obj)