// Checkpoint 1 - Desafio Introdução ao JavaScript
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
            console.log("Prato inexistente")
    }

    if (tempo > prato && tempo < prato * 3) {
        console.log('A comida queimou')
    } else if (tempo >= prato * 3){
        console.log('Kabumm!')
    } else if (tempo < prato){
        console.log('Tempo Insuficiente')
    } else {
        console.log('Prato pronto, bom apetite')
    } 
    
}

microwave(8, "macarrão")