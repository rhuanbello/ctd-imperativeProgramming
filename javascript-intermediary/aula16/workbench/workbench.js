// Workbench Aula 16 - "Arrow Functions (com Parâmetros)"

// Criando uma função que recebe dois parâmetros
const textArray = (valorA, valorB) => { 
    // Estes parâmetros serão inseridos em uma array chamada frase
    let frase = [valorA, valorB]
    // A função textArray agora retorna a array frase, que recebe como elemento dois parametros
    return frase 

}

// a função fizzBuzz recebe três parâmetros, os dois números inseridos pelo usuário para ser comparado com os números de 1 a 100
// e a função textArray como callback
const fizzBuzz = (numA, numB, callback) => {
    // laço for para incrementar à variável i + 1 até alcançar o número 100
    for (let i = 1; i <= 100; i++) {
        // condição caso numA e numB sejam múltiplos de i
        if (i % numA === 0 && i % numB === 0) {
            // caso seja verdadeira, irá concatenar o primeiro elemento e o segundo elemento da array inserida como parâmetro
            console.log(callback[0] + callback[1]) 
        // condição caso apenas numA seja múltiplo de i
        } else if (i % numA === 0) {
            // caso seja verdadeiro, irá imprimir o primeiro elemento da array inserida como parâmetro
            console.log(callback[0])
        // a execução do código só chegará aqui caso numA e numB não sejam múltiplos de i, e caso apenas numA não seja múltiplo de i
        // ou seja, eliminando todas estas condições, este else só será true caso apenas numB seja múltiplo de i
        } else {
            // caso seja verdadeiro, irá imprimir o segundo elemento da array inserida como parâmetro
            console.log(callback[1])
        }
        
    }

}

// aqui estamos executando a função fizzBuzz, passando como parâmetro primeiro nossos números numA e numB, e segundo nossa array de callback, que também precisa receber os parâmetros de valorA e valorB
fizzBuzz(8, 7, textArray('Rhuan', 'Bello'))