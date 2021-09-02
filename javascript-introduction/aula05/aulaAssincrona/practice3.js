// OPERADORES DE ATRIBUIÇÃO

let x = 10;
let y = 5;

// Adição
x += y; // x = x + y
console.log(x) // 15

// Subtração
x -= y; // x = x - y
console.log(x) // 10

// Multiplicação
x *= y; // x = x * y
console.log(x) // 50

// Divisão
x /= y; // x = x / y
console.log(x) // 10

// Módulo
x %= y; // x = x % y
console.log(x) // 0

// Potência
x = 10;
y = 3;
x **= y; // x = x ** y ou x = 10³ ou 10 * 10 * 10
console.log(x) // 1000

// OPERADORES DE COMPARAÇÃO

// Igual
x = 10;
y = '10'; 

if(x == y){ // o operador == apenas verifica se x tem o mesmo valor que y
    console.log(x, 'é igual a', y) // true pois apesar de serem de tipos diferentes, ambos possuem o valor 10
} else {
    console.log(x, 'não é igual a', y)
};

// Estritamente Igual
x = 10;
y = '10'; 

if(x === y){ // verifica se x é estritamente igual a y, mesmo se forem de tipos diferentes
    console.log(x, 'é estritamente igual a', y)
} else {
    console.log(x, 'não é estritamente igual a', y) // false pois apesar de terem o mesmo valor, x é tipo number e y é tipo string
};

// Diferente
x = 10;
y = 5;

if (x != y){
    console.log(x, 'é diferente de', y)
} else {
    console.log(x, 'é igual a', y)
}

// Estritamente Diferente
x = 10;
y = '10';

if (x !== y){
    console.log(x, 'é estritamente diferente de', y)
} else {
    console.log(x, 'não é estritamente igual a', y)
}

// Maior

x = 11;
y = 10;

if (x > y){
    console.log(x, 'é maior que', y)
} else {
    console.log(x, 'não é maior que', y)
}

// Operadores Aritméticos

// Incrementa 1 ao valor
x = 5;
x++; // x = x + 1 
console.log(x) // 2

// Exponenciação
x = 5;
y = 2;
soma = x ** y; // soma = x ** 2 
console.log(soma) // 25

const double = y => y * 2 
console.log(double(20))

// Comparador Lógico && e ||

console.log(10 < 1 && 1 > 2) 
// Retorna falso pois 10 é maior que 1
console.log(1 <= 1 && 3 >= 2) 
// Retorna true pois ambos resultados são verdadeiros

console.log(3 <= 1 || 3 >= 2) 
// Retorna true pois um dos resultados é verdadeiro
console.log(3 <= 1 || 3 >= 4) 
// Retorna falso pois nenhum dos resultados é verdadeiro

// Comparador de Neganção !

console.log(5 > 3)
// Retorna verdadeiro pois 5 é maior que 3

console.log(!5 > 3)
// Apesar de ser verdadeiro, o operador ! nega a condição e retorna falso

// Operador de Concatenação

let primeiroNome = 'Rhuan'
let segundoNome = 'Bello'

// Três formas de concatenar
console.log(primeiroNome + ' ' + segundoNome) 
console.log(primeiroNome, segundoNome)
console.log(`${primeiroNome} ${segundoNome}`)
