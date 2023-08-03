// e todos os operandos tem que esta verdadeiro oara ser verdadeiro
//v e v -> v
//v e f -> f
//f e ? -> f
//f e f -> v

// ou basta um esta verdadeiro para ser verdadeiro
//v ou ? -> v
//f ou v -> v
//f ou f -> f

//xor os dois tem que ser diferentes par dar verdadeiro
//v xor v -> f
//v xor f -> v
//f xor v -> v
//f xor f -> f

//negacao logica
//!v  -> f
//!f -> v

// OPERAADORES LOGICOS CURTOCIRCUITOS
// e = &&
// ou = || 
// xor = !=
// negacao logica = !
function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unario

    return{comprarSorvete, comprarTv50, comprarTV32, manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

