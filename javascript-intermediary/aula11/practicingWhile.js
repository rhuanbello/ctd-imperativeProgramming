// Exercício Praticando com While

// 1. Escreva um programa que mostre todos os números ímpares de 1 até 100

{

let i = 1;

while (i <= 100) {
    console.log(i)
    i += 2;
}

// ou com Do While

let o = 1;

do {
    console.log(o)
    o += 2;
} while (o <= 100)

}

// 2. Escreva um programa que mostre todos os números pares de 1 até 100

{

let i = 0;

while (i <= 100) {
    console.log(i)
    i += 2;
}

// ou com Do While

let o = 0;

do {
    console.log(o)
    o += 2;
} while (o <= 100)

}

// 3. Escreva um programa que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro

function parImpar(num) {
    let impar = 1
    let par = 0

    while (par <= num) {
        console.log('Números pares até ' + num)
        console.log(par)
        par+=2
    }

    while (impar <= num) {
        console.log('Números ímpares até ' + num)
        console.log(impar)
        impar+=2
    }

}

// Insira o número inteiro limite abaixo
parImpar(30)

// 4. Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele
//    Através de um laço while, peça ao usuário que entre com as notas de todos os alunos da sala, um por vez
//    Por fim, mostre a média aritmética da turma

function alunosSala (alunos) {
    let notas = [7, 5, 6, 5, 6, 10, 7, 9, 9, 9] // Notas de 10 Alunos em Array
    let total = 0; // Variável que armazena total de Notas
    let i = 0; // Índice de Array inicia em 0
    
    while (i < alunos) { // enquanto o índice for menor que o total de alunos
        total += notas[i] 
        i++

    }

    console.log('Número total de alunos é ' + alunos)
    console.log('A média da turma é ' + (total / alunos))

}

alunosSala(10)
