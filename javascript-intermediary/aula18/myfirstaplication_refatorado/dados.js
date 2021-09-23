// Criando função construtora que recebe como propriedade os parâmetros nome, altura e gênero
function Dados (nome, altura, genero) {
    this.nome = nome;
    this.altura = altura;
    this.genero = genero;

}

// criando 15 objetos através da função construtora
let dados1 = new Dados ('Gustavo', 1.70, 'Masculino');
let dados2 = new Dados ('Gabriela', 1.60, 'Feminino');
let dados3 = new Dados ('Gabriel', 1.65, 'Masculino');
let dados4 = new Dados ('Joana', 1.75, 'Feminino');
let dados5 = new Dados ('Diego', 1.85, 'Masculino');
let dados6 = new Dados ('Thiago', 1.65, 'Masculino');
let dados7 = new Dados ('Ana', 1.55, 'Feminino');
let dados8 = new Dados ('Leticia', 1.70, 'Feminino');
let dados9 = new Dados ('Lorena', 1.45, 'Feminino');
let dados10 = new Dados ('Rhuam', 1.90, 'Masculino');
let dados11 = new Dados ('Alessandra', 1.60, 'Feminino');
let dados12 = new Dados ('Alex', 1.75, 'Masculino');
let dados13 = new Dados ('Bruna', 1.55, 'Feminino');
let dados14 = new Dados ('Bruno', 1.65, 'Masculino');
let dados15 = new Dados ('João', 1.75, 'Masculino');

// armazenando todos os 15 objetos em uma array chamada arrayDados
let arrayDados = [dados1, dados2, dados3, dados4, dados5, dados6, dados7, dados8, dados9, dados10, dados11, dados12, dados13, dados14, dados15];

module.exports = arrayDados