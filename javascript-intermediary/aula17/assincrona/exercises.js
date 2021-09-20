// Crie uma array de números pares, e utilizando a função map() nesse array, crie um novo array com apenas números ímpares

let numPares = [0, 2, 4, 6, 8]

let numImpares = numPares.map(item => item + 1)

console.log(numImpares)

// Crie um array de nomes, que possua dois índices com o nome Maria, utilize o filter() para obter apenas esses dois índices com o nome Maria

let nomes = ['João', 'Leonardo', 'Maria', 'Chagas', 'Renan', 'Maria']

let nomesFiltrados = nomes.filter(item => item == 'Maria')

console.log(nomesFiltrados)

// Crie um array de números e utiliza a função reduce() para devolver uma string com os números formatados: [1, 5, 9, 3, 7] ⇒ "1 - 5 - 9 - 3 - 7"

let nums = [1, 5, 9, 3, 7]

let numsFormatted = nums.reduce((anterior, atual) => anterior + '-' + atual)

console.log(numsFormatted)

// Crie um array de animais, após isso passe por cada índice utilizando o forEach e imprima a frase "O animal é nome_do_animal"

let animais = ['João', 'Leonardo', 'Chagas', 'Renan']

animais.forEach(item => console.log(`O nome do animal é ${item}`))