// Crie uma função que converta polegadas em centímetros
// Recebe pelo parâmetro polegadas e retorna seru equivalente em centímetros
// A fórmula é número em polegadas * 2.54

function conversorPolegadas(valorPolegadas){
    let resultado = valorPolegadas * 2.54
    console.log(`${valorPolegadas} polegadas equivale a ${resultado} centímetros`)
}
conversorPolegadas(3)

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function conversorUrl(enderecoSite){
    console.log(`http://www.${enderecoSite}.com.br`)
}
conversorUrl('digitalhouse')

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação

function gritariaAlheia(fraseQualquer){
    console.log(`${fraseQualquer}!`)
}
gritariaAlheia('Up the irons')

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function meuPetIdoso(idadeHumano){
    let resultado = idadeHumano * 7
    console.log(`${idadeHumano} anos equivale a ${resultado} anos para a idade dos cachorros`)
}
meuPetIdoso(22)

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.
// Fórmula é Salário / Jornada

function escravidaoModerna(salario, jornada){
    let salarioHora = salario / jornada
    let resultado = salarioHora.toFixed(2)
    console.log(`Você recebe ${salario} reais e trabalha ${jornada} por mês, recebendo por hora o valor de ${resultado} reais`)
}
escravidaoModerna(550, 160)

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function calculadoraImc(altura, peso){
    console.log(`A sua altura é de ${altura}, o seu peso é de ${peso}kg e seu IMC é ${Math.round(peso / (altura ** 2))}`)
}

calculadoraImc(1.90, 75)

// Exercícios Extras

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

function gritariaAlheia2(fraseQualquer){
    var resultado = fraseQualquer.toUpperCase()
    console.log(`A entrada ${fraseQualquer} se tornou ${resultado} com o método .toUpperCase()`)
}
gritariaAlheia2('up the irons')

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipoDeDado(fraseQualquer){
    var resultado = typeof(fraseQualquer)
    console.log(`A entrada "${fraseQualquer}" é do tipo ${resultado}`)
}
tipoDeDado('a')

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
// Raio é a distância do centro até a extremidade
// Fórmula 2*Math.PI*R

function calculaCircunferencia(raio){
    var circunferencia = 2 * Math.PI * raio
    var resultado = circunferencia.toFixed(2)
    console.log(`O Raio é de ${raio} e a Circunferência é ${resultado}`)
}

calculaCircunferencia(5);