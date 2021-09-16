// Terceirizando Funções

{

    const andar = () => 'O carro está andando'
    const parar = () => 'O carro está parado'

    function acaoCarro (callback) {
        console.log(callback())
    }

    // defina o callback abaixo
    acaoCarro(parar)

}

// ou

{
    const movimento = direcao => 'O carro está ' + direcao

    function acaoCarro (direcao, callback) {
        console.log(callback(direcao))
    }

    // defina a ação do carro abaixo
    acaoCarro('parado', movimento)
}

