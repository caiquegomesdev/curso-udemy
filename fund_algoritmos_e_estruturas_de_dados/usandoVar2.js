// var globaliza a variavel (e recomendavel usar sempre Let ao inves do Var)
// var nao e suportado dentro de um bloco
var number = 1 
{
    var number = 2 
    console.log('dentro = ', number)
}
console.log('Fora = ', number)