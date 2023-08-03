//Break causa um desvio de fluxo para fora do laco ccorrete 
const nums = [1,2,3,4,5,6,7,8,9,10]
for (x in nums){
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('================================')

// Continue interrompe a repeticao corrente e vai para a proxima repeticao
for (y in nums ){
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('================================')
externo: for (a in nums) {
    for (b in nums){
        if( a == 2 && b == 3) break externo
        console.log(`par = ${a},${b}`)

    }
}
