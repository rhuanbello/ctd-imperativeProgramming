const dados = require('./dados')

// podemos filtrar os dados das seguintes formas:

const dadosOpiniaoOtimo = dados.filter(dado => dado.opniao == 'Ótimo')
const dadosOpiniaoRegular = dados.filter(dado => dado.opniao == 'Regular')
const dadosOpiniaoBom = dados.filter(dado => dado.opniao == 'Bom')

// // ou de forma mais dinâmica (podemos inserir qualquer opnião na função abaixo que ela retornará somente os elementos com esta opinião)

// const dadosOpiniao = (tipoDado) => dados.filter(dado => dado.opniao == tipoDado)
// const dadosOpiniaoOtimo = dadosOpiniao('Ótimo')
// const dadosOpiniaoRegular = dadosOpiniao('Regular')
// const dadosOpiniaoBom = dadosOpiniao('Bom')

// // ou mais dinâmico ainda (podemos inserir qualquer propriedade e a condição que queremos filtrar na função abaixo)

// const filtroDados = (tipoDado, condicao) => dados.filter(dado => dado[tipoDado] == condicao)
// const dadosOpiniaoOtimo = filtroDados('opniao', 'Ótimo')
// const dadosOpiniaoRegular = filtroDados('opniao', 'Regular')
// const dadosOpiniaoBom = filtroDados('opniao', 'Bom')
// const dadosIdade = filtroDados('idade', 23)

// Função que calcula a média de idade de qualquer opnião inserida como parâmetro
const calculadoraMediaIdadeOpiniao = array => {
    
    const somaIdade = array.reduce((acumulador, elemento) => {
        return acumulador + elemento.idade
        
    }, 0)

    return (somaIdade / array.length).toFixed(0)

}

console.log(`A média de idade de pessoas que responderam ótimo é de ${calculadoraMediaIdadeOpiniao(dadosOpiniaoOtimo)} anos
A média de idade de pessoas que responderam regular é de ${calculadoraMediaIdadeOpiniao(dadosOpiniaoRegular)} anos
A média de idade de pessoas que responderam bom é de ${calculadoraMediaIdadeOpiniao(dadosOpiniaoBom)} anos`)

// Função que calcula a porcentagem de qualquer opnião inserida como parâmetro
const porcentagemOpiniao = (arrayFiltrada, arrayGeral) => {  

    const contadorElementosFiltrados = array => array.length
        const resultadoFiltrado = contadorElementosFiltrados(arrayFiltrada)

    const contadorElementosGerais = array => array.length
        const resultadoGeral = contadorElementosGerais(arrayGeral)

    return (resultadoFiltrado / resultadoGeral).toFixed(2) + '%'

}

console.log(`A porcentagem de pessoas que responderam ótimo é de ${porcentagemOpiniao(dadosOpiniaoOtimo, dados)}
A porcentagem de pessoas que responderam regular é de ${porcentagemOpiniao(dadosOpiniaoRegular, dados)}
A porcentagem de pessoas que responderam bom é de ${porcentagemOpiniao(dadosOpiniaoBom, dados)}`)

// Função que calcula a quantidade de elementos de qualquer array
const contadorElementos = array => array.length

console.log(`A quantidade de pessoas que responderam ótimo é de ${contadorElementos(dadosOpiniaoOtimo)} pessoas
A quantidade de pessoas que responderam regular é de ${contadorElementos(dadosOpiniaoRegular)} pessoas
A quantidade de pessoas que responderam bom é de ${contadorElementos(dadosOpiniaoBom)} pessoas`)