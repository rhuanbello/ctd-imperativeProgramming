// Workbench Arrays e Coleções

// a. Acesse elementos específicos de um Array

let designInterface = ['Figma', 'Adobe XD', 'Sketch', 'Marvel APP']

console.log('a. Acesse elementos específicos de um Array')
console.log('Retorna ' + designInterface[1]) // retorna 'Adobe XD'

// b. Modifique cada um dos elementos de um array e imprima no console

designInterface[0] = 'Figma 2.0'
designInterface[1] = 'Adobe XD 2.0'
designInterface[2] = 'Sketch 2.0'
designInterface[3] = 'Marvel APP 2.0'

console.log('b. Modifique cada um dos elementos de um array e imprima no console')
console.log(designInterface)

// c. Adicione elemento a um array

designInterface.push('Wireframe 2.0')
console.log('c. Adicione elemento a um array')
console.log(designInterface)

// d. Extraia elementos de um array

console.log('d. Extraia elementos de um array')
designInterface.pop()
console.log('Array com último elemento removido:')
console.log(designInterface)
designInterface.shift()
console.log('Array com primeiro elemento removido:')
console.log(designInterface)

// e. Compare elementos de uma array com os elementos de outro

let adobeStudio = ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD 2.0', 'Adobe Premiere']

console.log('e. Compare elementos deu m array com os elementos de outro')
console.log('Item Adobe XD 2.0 existe na Array designInterface?')
console.log(adobeStudio.includes(designInterface[0]))    

// Array Invertido

// 1. Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console
// você não precisa inverter o array

console.log('1. Crie uma função que retorne um array com seus elementos invertidos sem modificá-lo')
console.log('Array com ordem inversa:')

function imprimirInverso(array) {
    saida1 = array.pop()
    saida2 = array.pop()
    saida3 = array.pop()
    saida4 = array.pop()
    
    array.push(saida1)
    array.push(saida2)
    array.push(saida3)
    array.push(saida4)

    console.log(array)
}

imprimirInverso([1, 2, 3, 4])

// Crie uma função somarArray() que aceita um array de números e retorna a soma de todos eles

console.log('Crie uma função somarArray() que aceita um array de números e retorna a soma de todos eles')

function somarArray(array) {
    return array[0] + array[1] + array[2]

}

console.log(somarArray([1, 2, 3]))

// Crie uma função chamada join que recebe um array e simula o comportamente do método array.join()

console.log('Crie uma função chamada join que recebe um array e simula o comportamente do método array.join()')

function join(array){
    str = array.shift() + array.shift() + array.shift()
    console.log(str)

}

join(['o','l','á'])

// Coleção de Filmes

// O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto
// 1. Crie a estrutura apropriada para armazenar os seguintes filmes e séries:
// Star wars, matrix, mr robot, o preço do amanhã, a vida é bela

var colecao = ['Star wars', 'Matrix', 'Mr. Robot', 'O Preço do Amanhã', 'A Vida é Bela']

// 2. Os filmes devem estar todos em letras maiúsculas, para isso, crie uma função que recebe um array por parâmetro e convertar 
// o conteúdo de cada elemento em letras maiúsculas

console.log('Crie uma função que recebe um array por parâmetro e convertar o conteúdo de cada elemento em letras maiúsculas')

function upperCase(array) {
    // elimine e retorne o primeiro elemento da array, converta para caixa alta e envie para o fim da array
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase())
    array.push(array.shift().toUpperCase()) 
    array.push(array.shift().toUpperCase()) 
    console.log(array)

}

upperCase(colecao)

// 3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes
// Toy Story, Finding Nemo, Kung-fu Panda, Wally, Fortnite

let animacoes = ['Toy Story', 'Finding Nemo', 'Kung-fu Panda', 'Wally', 'Fortnite']

// Crie uma função que recebe dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array dentro do primeiro
// a fim de retornar um único array com todos os filmes como seus elementos

console.log('Crie uma função que recebe dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array dentro do primeiro')

function reune(arrOne, arrTwo) {
    // envie para 1° array, o elemento 0, 1, 2, 3 e 4 da 2° Array
    arrOne.push(arrTwo[0], arrTwo[1], arrTwo[2], arrTwo[3], arrTwo[4])
    console.log(arrOne)
   
}

reune(colecao, animacoes)

// 4. Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game
// Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo
// para o array que contém todos os filmes 

colecao.pop()
console.log('Array Final sem o Elemento "Fortnite"')
console.log(colecao)

// 5. Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes
console.log('Crie uma função que compare valores de dois Arrays e nos diga se elas são iguais ou diferentes')

function scores(asiaScores, euroScores) {
    // Operador Ternário:
    // índice[0] de asiaScores é estritamente igual ao índice[0] de euroScores ? True : False
    asiaScores[0] === euroScores[0] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[1] === euroScores[1] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[2] === euroScores[2] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[3] === euroScores[3] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[4] === euroScores[4] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[5] === euroScores[5] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[6] === euroScores[6] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[7] === euroScores[7] ? console.log('São iguais') : console.log('São diferentes')
    asiaScores[8] === euroScores[8] ? console.log('São iguais') : console.log('São diferentes')

}

scores(asiaScores, euroScores)
