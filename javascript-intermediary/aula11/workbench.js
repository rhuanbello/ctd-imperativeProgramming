// Mesa de Trabalho - Ciclos e Repetições

// 1. Começamos a partir de nossa variedade de filmes:

let filmes = ['star wars', 'matrix', 'robot', 'o preço do amanhã', 'a vida é bela']

// Vamos mover a função converterMaiusculas para fazer acontecer de forma automática, com loops

function converterMaisculas(array){

    for (i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();

    }

    return array;
}

console.log(converterMaisculas(filmes))

// 2. Agora precisamos modificar a função de passagem de elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original

let animacoes = ['toy story', 'finding nemo', 'kung-fu panda', 'wally']

function passarElementos(array1, array2) {

    for (i = 0; i < array2.length; i++) {
        array1.push(array2[i].toUpperCase())

    }

    return array1

}

console.log(passarElementos(filmes, animacoes))

// 4. Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function scores(asia, europa) {
    let resultadoComparacoes = []

    for (i = 0; i < asia.length; i++) {
        resultadoComparacoes[i] = asia[i] === europa[i] ? 'Nota ' + asia[i] + ' da Ásia é igual' + ' a Nota ' + europa[i] + ' da Europa' : 'Nota ' + asia[i] + ' da Ásia é diferente ' + 'da Nota ' + europa[i] + ' da Europa'

    }

    return resultadoComparacoes

}

console.log(scores(asiaScores, euroScores))

// BÔNUS EXTRA

// Um cliente nos pede para fazer um programa que possa determinar os vencedores de um concurso
// Cada participante tem 5 notas, dos quais suas pontuações individuais serão fromadas, os participantes com suas respectivas pontuações são
// O concurso consiste em 2 modalidades de seleção para vencedor:
// Melhor média (a maior pontuação média entre os concorrentes)
// Maior e-tip (a maior pontuação entre as 5 notas de cada participante)

// 1. Determine qual seria a maneira ideal de representar cada participante com suas pontuações
// 2. Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele

let participantes = [[5, 8, 4, 9, 5], [8, 7, 8, 6, 8], [7, 5, 10, 8, 3]]

function pontuacaoMedia(participantes) {
    let totalParticipantes = 0, mediaFinal = 0;

    for (i = 0; i < participantes.length; i++) {
        totalParticipantes += participantes[i] 
        
    }

    mediaFinal = totalParticipantes / participantes.length

    return mediaFinal

}

// 3. Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem

function pontuacaoMaior(participantes) {
    let maiorNota = 0;

    for (i = 0; i < participantes.length; i++){
        participantes[i] > maiorNota ? maiorNota = participantes[i] : ''
        
    }

    return maiorNota
}


// 4. Crie uma função chamada competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma, e deve anunciar (mostrar no console) o vencedor de cada modalidade de pontuação

function competicao(){

    let maiorNotaParticipanteA = pontuacaoMaior(participantes[0])
    let maiorNotaParticipanteB = pontuacaoMaior(participantes[1])
    let maiorNotaParticipanteC = pontuacaoMaior(participantes[2])
    let maiorMediaParticipanteA = pontuacaoMedia(participantes[0])
    let maiorMediaParticipanteB = pontuacaoMedia(participantes[1])
    let maiorMediaParticipanteC = pontuacaoMedia(participantes[2])

    console.log('A Maior nota do Participante A foi ' + maiorNotaParticipanteA)
    console.log('A Maior nota do Participante B foi ' + maiorNotaParticipanteB)
    console.log('A Maior nota do Participante C foi ' + maiorNotaParticipanteC)

    console.log('A Maior média do Participante A foi ' + maiorMediaParticipanteA)
    console.log('A Maior média do Participante B foi ' + maiorMediaParticipanteB)
    console.log('A Maior média do Participante C foi ' + maiorMediaParticipanteC)

    console.log('Calculando resultados...')
    console.log('O resultado sairá em 3, 2, 1...')

    // Code below

    if (maiorNotaParticipanteA > maiorNotaParticipanteB && maiorNotaParticipanteA > maiorNotaParticipanteC) {
        console.log('O Vencedor da Categoria "Maior Nota" foi o Participante A com a nota ' + maiorNotaParticipanteA)
    } else if (maiorNotaParticipanteB > maiorNotaParticipanteC) {
        console.log('O Vencedor da Categoria "Maior Nota" foi o Participante B com a nota  ' + maiorNotaParticipanteB)
    } else {
        console.log('O Vencedor da Categoria "Maior Nota" foi o Participante C com a nota  ' + maiorNotaParticipanteC)
    }

    if (maiorMediaParticipanteA > maiorMediaParticipanteB && maiorMediaParticipanteA > maiorMediaParticipanteC) {
        console.log('O Vencedor da Categoria "Maior Média" foi o Participante A com a nota  ' + maiorMediaParticipanteA)
    } else if (maiorMediaParticipanteB > maiorMediaParticipanteC) {
        console.log('O Vencedor da Categoria "Maior Média foi o Participante A com a nota  ' + maiorMediaParticipanteB)
    } else {
        console.log('O Vencedor da Categoria "Maior Média" foi o Participante A com a nota  ' + maiorMediaParticipanteC)
    }

}

competicao()
