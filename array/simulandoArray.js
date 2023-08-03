const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Gomes'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)}, 
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Gomes']
console.log(meuArray.toString(),meuArray)