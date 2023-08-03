let dobro = function (a){
    return 2 * a
}

//arrow
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'
}

ola = () => 'OLA'
ola = _ => 'OLA' //posue um parametro
console.log(ola())