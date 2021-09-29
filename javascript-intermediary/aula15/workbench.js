// Checkpoint I - Programação Imperativa

{
// 1 - Quais as saídas corretas?

function soma (a=1, b=3) {
    return a + b
}

console.log(soma())
console.log(soma(3))
console.log(soma(1, 2))

// R: 4 6 3

}
{

// 3 - Dado a array abaixo, qual comando devemos executar para que a saída seja [99, 10, 8, 7, 6, 1, 0]?

let numeros = [10, 8, 7, 99, 0, 1, 6];

// R:
numeros.sort(function(a, b){return b-a;})

}
{

// 4 - Qual o valor de Z?

var z = 0;
for (var i = 20; i < 50; i += 10){
    console.log(z)

}

// R: 90

}
{

// 7 - Explique cada linha de código abaixo:

let frutasAmarelas=['Melão', 'Mamão', 'Limão Siciliniano']
let frutasVermelhas=['Morango', 'Cereja', 'Maçã Red']
let frutasVerdes=['Limão', 'Kiwi', 'Maçã Verde']
// Criado três arrays

frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
// Declarado frutasVermelhas1 do tipo "any", que recebe a array "frutasVermelhas" para ser percorrida com o método map, que recebe como callback uma arrow function que tem como parâmetro os elementos da array. Essa arrow function possui um retorno implícito de todos os elementos da array em letra maiúscula com o método upperCase()

let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
// Criado uma array chamada todasFrutas que recebe cada elemento das arrays frutasAmarelas, frutasVermelhas1 e frutasVerdes através do spread operator, que percorre cada elemento adicionando uma por uma na nova array todasFrutas

console.log(todasFrutas)

}
{

// 9 - Qual o código para o cálculo fatorial de um número?

// R:

let valor = 5;
let fatorial = 1;

for (let i = valor; i > 1; i--){
    fatorial*=i;
}

console.log('Fatorial = '+fatorial)

}
{

// 12 - Como mostrar os valores de fruta1, fruta2, fruta3 respectivamente?

let frutasAmarelas =['Melão', 'Mamão', 'Limão']
let [fruta1, fruta2, fruta3]=frutasAmarelas

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(frutasAmarelas)

// R: Melãoo, Mamão, Limão, conceito é de desestruturação

}
{

// 13 - Qual o resultado do código abaixo?

let x = 5;
let y = x++ + ++x;

console.log('y= '+y)

x=3;
y=x*(x + 1)*x++;
x = 5
y = 3
y*= x+1

console.log('x= ' +x)
console.log('y= ' +y)

// R - 12 5 18

}
{

// 15 - O que será impresso abaixo?

for (var i=0; i<50; i+=10){
    console.log(i);
}

console.log(i)

// R - 0 10 20 30 40 50

}
{

// 18 - O que quanda método abaixo faz?

function soletrar(texto){
    console.log(texto.replace('-', '').toLocaleUpperCase().split("").join('-'))
}

soletrar('digital-house')
soletrar('ctd')

// replace('-', '') - Substitui cada item por uma string vazia
// toLocaleUpperCase() - Transforma o texto em letras maiúsculas
// split('') - Transforma a string em Array
// join('-') - Junta o array com o separador hífen

}