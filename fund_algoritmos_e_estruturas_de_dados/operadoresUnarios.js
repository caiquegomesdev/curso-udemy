let num1 =1
let num2 =2

num1++ // acrescenta uma unidade ao valor da variavel
console.log(num1)
--num1 // retira uma unidade ao valor da variavel)// a ordem de precedencia e maior do que a primeira forma
console.log(num1)

console.log(++num1 === num2--) // nesse caso ele essa linha e  verdadeira pelo fato da precedencia o ++num1 = 2 === num2 = 2 que depois passa a ser num2-- que se torna num2 = 1

console.log(num1 === num2) // nesse caso da falso pois nao tem uma ordem de precedencia especifica dessa forma e lido de vez...

