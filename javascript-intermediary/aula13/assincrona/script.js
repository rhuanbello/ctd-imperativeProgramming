let streaming = {
    nome: 'netflix',
    ano: 2010, 
    titulos: 2926,
    assinantes: 209000000,
    valor: 45,
    worth(){
        if (this.valor < 25) {
            return 'vale a pena'   
        } else {
            return 'não vale a pena'
        } 
    }

}

console.log(`O nome do streaming é ${streaming.nome}, o ano de seu lançamento foi em ${streaming.ano}, atualmente possui ${streaming.titulos} títulos e ${streaming.assinantes} assinantes, sua assinatura mensal é R$${45}, que ${streaming.worth()}`)

function Streaming(nomeStreaming, anoStreaming, titulosStreaming) {
    this.nome = nomeStreaming;
    this.ano = anoStreaming;
    this.titulos = titulosStreaming

}

let streamingNetflix = new Streaming('netflix', 2010, 2926)
let streamingAmazon = new Streaming('amazon', 2017, 1600)

console.log(`O nome do serviço de streaming é ${streamingNetflix.nome}, seu ano de lançamento foi em ${streamingNetflix.ano} e atualmente possui ${streamingNetflix.titulos} títulos`)

console.log(`O nome do serviço de streaming é ${streamingAmazon.nome}, seu ano de lançamento foi em ${streamingAmazon.ano} e atualmente possui ${streamingAmazon.titulos} títulos`)