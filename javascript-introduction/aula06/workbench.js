// Funções de Operações

function somar(numA, numB){
    let resultado = numA + numB
    return resultado
}

function subtrair(numA, numB){
    let resultado = numA - numB
    return resultado
}

function multiplicar(numA, numB){
    let resultado = numA * numB
    return resultado
}

function dividir(numA, numB){
    let resultado = numA / numB
    return resultado
}

function quadradoDoNumero(numero){
    return multiplicar(numero, numero)
}

function mediaDeTresNumeros(numA, numB, numC){
    let numeroTotal = somar (numA, numB)
    var total = (numeroTotal + numC)
    var resultado = dividir (total, 3)
    return resultado.toFixed(1)
}

function calculaPorcentagem(numA, numB){
    let numeroTotal = multiplicar (numA, numB)
    var resultado = dividir (numeroTotal, 100)
    return resultado
}

function geradorDePorcentagem(numA, numB){
    let numeroTotal = multiplicar (numA, 100) 
    var resultado = dividir (numeroTotal, numB)
    return resultado
}

// Operações

console.log(`-------------- Operação de Multiplicar -------------- \n`)
console.log(`= ${somar(1, 5)} \n`)

console.log(`-------------- Operação de Subtração -------------- \n`)
console.log(`= ${subtrair(10, 5)} \n`)

console.log(`-------------- Operação de Multiplicar -------------- \n`)
console.log(`= ${multiplicar(10, 5)} \n`)

console.log(`-------------- Operação de Dividir -------------- \n`)
console.log(`= ${dividir(10, 5)} \n`)

console.log(`-------------- Operação de Dividir #02 -------------- \n`)
console.log(`= ${dividir(0, 5)} \n`)

console.log(`-------------- Operação Quadrado do Número -------------- \n`)
console.log(`= ${quadradoDoNumero(10)} \n`)

console.log(`-------------- Operação de Média de Três Números -------------- \n`)
console.log(`= ${mediaDeTresNumeros(20, 10, 10)} \n`)

console.log(`-------------- Operação de Porcentagem -------------- \n`)
console.log(`= ${calculaPorcentagem(15, 300)}% \n`)

console.log(`-------------- Operação de Porcentagem #02-------------- \n`)
console.log(`= ${geradorDePorcentagem(2, 200)}% \n`)