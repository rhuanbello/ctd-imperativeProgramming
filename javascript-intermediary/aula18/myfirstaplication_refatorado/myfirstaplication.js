const dados = require("./dados");

const dadosHomens = dados.filter(dado => dado.genero == 'Masculino')
const dadosMulheres = dados.filter(dado => dado.genero == 'Feminino')

const contadorElementos = array => array.length

console.log(`Foram encontrados ${contadorElementos(dadosHomens)} homens nestes dados
Foram encontradas ${contadorElementos(dadosMulheres)} mulheres nestes dados`)

const calculadoraMediaAltura = array => {
    
    const somaAltura = array.reduce((acumulador, elemento) => {
        return acumulador + elemento.altura
        
    }, 0)

    return (somaAltura / array.length).toFixed(2) + ' cm de altura'

}

console.log(`A média de altura dos homens é de ${calculadoraMediaAltura(dadosHomens)}
A média de altura das mulheres é de ${calculadoraMediaAltura(dadosMulheres)}`)

const calculadoraMaiorMenorAltura = (array, tipo) => {
    let altura = array[0].altura

    switch (tipo) {
        case 'Maior altura':
            array.forEach(elemento => elemento.altura > altura ? altura = elemento.altura : '')
            console.log(`${altura}`)   
            break;
        case 'Menor altura':
            array.forEach(elemento => elemento.altura < altura ? altura = elemento.altura : '')
            console.log(`${altura}`)
            break;
        default:
            console.log('Informe um tipo de altura')
    }


}

// Exemplos de uso da Função "calculadoraMaiorMenorAltura"
console.log('A maior altura dos homens é:')
calculadoraMaiorMenorAltura(dadosHomens, 'Maior altura')
console.log('A menor altura dos homens é:')
calculadoraMaiorMenorAltura(dadosHomens, 'Menor altura')

console.log('A maior altura das mulheres é:')
calculadoraMaiorMenorAltura(dadosMulheres, 'Maior altura')
console.log('A menor altura das mulheres é:')
calculadoraMaiorMenorAltura(dadosMulheres, 'Menor altura')

console.log('A maior altura de todos os dados é: ')
calculadoraMaiorMenorAltura(dados, 'Maior altura')
console.log('A menor altura de todos os dados é: ')
calculadoraMaiorMenorAltura(dados, 'Menor altura')

