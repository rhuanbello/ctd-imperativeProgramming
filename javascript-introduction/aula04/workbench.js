let jose = {
    nome: 'José',
    sobrenome: 'da Silva',
    idade: 27,
    peso: 83.5,
    altura: 1.70
}

function calcularImc(nome, sobrenome, idade, peso, altura){
    console.log(`${nome} ${sobrenome} possui ${idade} anos e tem o IMC de ${Math.round(peso / (altura ** 2))}`)
}

calcularImc(jose.nome, jose.sobrenome, jose.idade, jose.peso, jose.altura)