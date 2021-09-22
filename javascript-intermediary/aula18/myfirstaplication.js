let dados = {
    nome: 'João',
    altura: 1.75,
    genero: 'masculino'
}

class Dados {
    constructor(nome, altura, genero) {
        this.nome = nome;
        this.altura = altura;
        this.genero = genero;

    }

}

let dados1 = new Dados ('gustavo', 1.70, 'masculino');
let dados2 = new Dados ('Gabriela', 1.60, 'feminino');
let dados3 = new Dados ('Gabriel', 1.65, 'masculino');
let dados4 = new Dados ('Joana', 1.75, 'feminino');
let dados5 = new Dados ('Diego', 1.85, 'masculino');
let dados6 = new Dados ('Thiago', 1.65, 'masculino');
let dados7 = new Dados ('Ana', 1.55, 'feminino');
let dados8 = new Dados ('leticia', 1.70, 'feminino');
let dados9 = new Dados ('lorena', 1.45, 'feminino');
let dados10 = new Dados ('Rhuam', 1.90, 'masculino');
let dados11 = new Dados ('alessandra', 1.60, 'feminino');
let dados12 = new Dados ('alex', 1.75, 'masculino');
let dados13 = new Dados ('bruna', 1.55, 'feminino');
let dados14 = new Dados ('Bruno', 1.65, 'masculino');

let array = [dados, dados1, dados2, dados3, dados4, dados5, dados6, dados7, dados8, dados9, dados10, dados11, dados12, dados13, dados14];

const maiorAltura = (array) => {
    let maiorAltura = array[0].altura
    let menorAltura = array[0].altura

    array.forEach(elemento => {
        elemento.altura > maiorAltura ? maiorAltura = elemento.altura : ''
        elemento.altura < menorAltura ? menorAltura = elemento.altura : ''

    });

    return 'A maior altura dos homens é ' + maiorAltura + ' e a menor é ' + menorAltura

}

console.log(maiorAltura(array))

const mediaAlturaMulheres = (array) => {
    let soma = 0;
    let media = 0;

    array.forEach(elemento => {
        if (elemento.genero == 'feminino') {
            media += 1
            soma += elemento.altura

        }
    })

    return 'A Média da altura das mulheres é ' + (soma / media).toFixed(2)

}

console.log(mediaAlturaMulheres(array))

const numeroHomens = (array => {
    let contador = 0;

    array.forEach(elemento => {
        elemento.genero == 'masculino' ? contador += 1 : ''

    })

    return 'O número de homens é ' + contador

})

console.log(numeroHomens(array))