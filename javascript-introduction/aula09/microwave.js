// Desafio Introdução ao JavaScript - CheckPoint 1

// Exercício 1
//  Escreve uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha
// A senha válida é o número 1234, deve ser impresso:
// Acesso permitido caso a senha seja válida
// Acesso negado caso a senha seja inválida

function verificaSenha(senha) {
    const senhaCorreta = 1234

    if (senha === senhaCorreta) {
        console.log("Acesso permitido \n")
    } else {
        console.log("Acesso negado \n")
    }
}

console.log('- Desafio Introdução ao JavaScript - CheckPoint 1 - \n')
console.log('- Exercício 1 - If/else \n')
verificaSenha(1234)

// Exercício 2 
// Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor ou se são iguais

function verificaNumeros(numA, numB){
    if (numA > numB){
        console.log(`O número A "${numA}" é maior que o número B "${numB}" \n`)
    } else if (numA < numB){
        console.log(`O número A "${numA}" é menor que o número B "${numB}" \n`)
    } else if (numA == numB) {
        console.log(`O número A "${numA}" é igual ao número B "${numB}" \n`)
    } else {
        console.log('Não é um número valido \n')
    }
}

console.log('- Exercício 2 - if/else if/else \n')
verificaNumeros(1, 2)

// Exercício 3 
// Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido
// Quando o enviar o número 9, o retorno será 'Setembro'

let mes = 11;
console.log('- Exercício 3 - Switch \n')

switch (mes) {
    case 1:
        console.log('Janeiro \n')
        break;
    case 2:
        console.log('Fevereiro \n')
        break;
    case 3:
        console.log('Março \n')
        break;
    case 4:
        console.log('Abril \n')
        break;
    case 5:
        console.log('Maio \n')
        break;
    case 6:
        console.log('Junho \n')
        break;
    case 7:
        console.log('Julho \n')
        break;
    case 8:
        console.log('Agosto \n')
        break;
    case 9:
        console.log('Setembro \n')
        break;
    case 10:
        console.log('Outubro \n')
        break;
    case 11:
        console.log('Novembro \n')
        break;
    case 12:
        console.log('Dezembro \n')
        break;
    default:
        console.log('Mês inválido \n')
}

// Exercício 4 
// Reescreva a função do exercício 1, utilizando o operador ternário

function verificaSenha2(senha) {
    senha === 1234 ? console.log("Acesso permitido \n") : console.log("Acesso negado \n")

}

console.log('- Exercício 4 - Operador Ternário \n')
verificaSenha2(1234)


// Checkpoint 2 - Desafio Introdução ao JavaScript
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
//  Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

// A pessoa tem que selecionar o prato (que tem um valor padrão)
// O prato e o tempo serão comparados (a menos que o prato não exista)

function microwave (tempo, prato){
    prato = prato.toLowerCase();

    switch (prato) {
        case "pipoca":
            prato = 10
            break;
        case "carne":
            prato = 15
            break;
        case "feijão":
            prato = 12
            break;
        case "brigadeiro":
            prato = 8
            break;
        case "macarrão":
            prato = 8
            break;
        default:
            console.log("Prato inexistente \n")
    }

    // obs: sei que abaixo deveria ser "tempo > prato * 2" ao invés de "tempo > prato"
    // mas achei que fizesse mais sentido queimar a comida com qualquer valor acima do padrão
    if (tempo > prato && tempo < prato * 3) {
        console.log('A comida queimou \n')
    } else if (tempo >= prato * 3){
        console.log('Kabumm! \n')
    } else if (tempo < prato){
        console.log('Tempo Insuficiente \n')
    } else {
        console.log('Prato pronto, bom apetite \n')
    } 
    
}

console.log("- Desafio Microondas - CheckPoint 2 - \n")
microwave(10, "macarrão")