// Concurso Stand-up

const alicia = [52, 67, 43]
const bob = [52, 67, 43]

function encontrarGanhador (score1, score2) {
    let pontuacaoA = 0, pontuacaoB = 0;

    for (i = 0; i < score1.length; i++) {
        if (score1[i] > score2[i]) {
            pontuacaoA += 1;
        } else if (score1[i] < score2[i]) {
            pontuacaoB += 1;
        } 
    }
    
    if (pontuacaoA > pontuacaoB) {
        console.log(`Alicia ganhou com ${pontuacaoA} pontos`) 
    } else if (pontuacaoB > pontuacaoA) {
        console.log(`Bob ganhou com ${pontuacaoB} pontos`)
    } else {
        console.log('Empate :(')
    }

}

encontrarGanhador(alicia, bob)

// Crie uma função digitalHouse() que receberá 2 números como parâmetros
// A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string "Digital" em vez do número
// Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string "House" em vez disso
// Se o número a ser impresso for um múltiplo em ambos parâmetros inseridos, você deve exibir a string "Digital House" em vez disso

function digitalHouse(numA, numB) {

    for (i = 1; i <= 100; i++) {

        if (i % numA === 0 && i % numB === 0) {
            console.log('Digital House') 
        } else if (i % numA === 0) {
            console.log('Digital')
        } else {
            console.log('House')
        }
        
    }

}

digitalHouse(8, 7)

// somaArray()... Reloaded

function somaArray(array) {
    
    let sum = 0
    
    for (i = 0; i < array.length; i++) {
        sum += array[i]
        
    }
    
    console.log(sum)
    
}

somaArray([1, 2, 3, 10])

// simulação join()

function join(array) {
    let sum = ''
    
    for (i = 0; i < array.length; i++) {
        sum += array[i]
        
    }
    
    console.log(sum)
    
}

join(['r', 'h', 'u', 'a', 'n'])