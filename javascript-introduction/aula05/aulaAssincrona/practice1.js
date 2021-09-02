// function darOi(nomeDaPessoa){
//     console.log("Olá tudo bem?", nomeDaPessoa)
// }
// darOi('valor para o parametro')

// let somar = function(numA, numB){
//     console.log(numA + numB);
// }

// somar(1, 3)

// let somar = function(numA, numB){
//     return numA + numB;
// };

// let resultado = somar(5, 10)
// console.log(resultado)

let resultado = 0;
console.log("resultado fora da função =", resultado);

function multiplicar(numA, numB) {
    resultado = numA * numB;
    console.log("resultado dentro da função =", resultado);
}

multiplicar(5, 2)