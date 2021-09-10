function ContaBancaria (numero, tipo, saldo, titular) {
    this.numero = numero,
    this.tipo = tipo,
    this.saldo = saldo,
    this.titular = titular

}

const abigaelNatte = new ContaBancaria(5486273622, 'Conta Corrente', 27771, 'Abigael Natte')
const ramonConnel = new ContaBancaria(1183971869, 'Conta Poupança', 8675, 'Ramon Connel')
const jarretLafuente = new ContaBancaria(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente')
const anselArdley = new ContaBancaria(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley')
const jackiShurmer = new ContaBancaria(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer')
const jobiMawtus = new ContaBancaria(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus')
const thomasinLatour = new ContaBancaria(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour')
const lonnieVerheijden = new ContaBancaria(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden')
const alonsoWannan = new ContaBancaria(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan')
const bernditeHuggett = new ContaBancaria(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett')

const contasBancarias = [
    abigaelNatte,
    ramonConnel,
    jarretLafuente,
    anselArdley,
    jackiShurmer,
    jobiMawtus,
    thomasinLatour,
    lonnieVerheijden,
    alonsoWannan,
    bernditeHuggett

]

let banco = {

    clientes: contasBancarias,

    consultarCliente(titular){

        for(i = 0; i < this.clientes.length; i++) {    

            if(titular == this.clientes[i].titular) {
                // console bonus
                console.log(`Dados de ${titular} encontrados!`)
                console.log(`A ${this.clientes[i].tipo} de ${titular} possui o número ${this.clientes[i].numero}.\nSeu saldo atual é de R$${this.clientes[i].saldo}, deseja realizar um saque ou depósito?`)
                // fim do console bonus
                
                cliente = this.clientes[i]
                break

            } else {
                cliente = `"${titular}" não foi encontrado em nosso banco de dados, verifique se o nome está correto e tente novamente.`

            }

        }

        return cliente

    },

    depositar(titular, dinheiro){

        for (i = 0; i < this.clientes.length; i++) {
            
            if (titular == this.clientes[i].titular) {
                    // console bonus
                    console.log(`Saldo Atual: R$${this.clientes[i].saldo}`)
                    console.log(`Processando depósito de R$${dinheiro}...`)
                    // fim do bonus

                    cliente = this.clientes[i].saldo += dinheiro

                    // console bonus
                    console.log(`Depósito realizado Sr. ${this.clientes[i].titular}! Seu novo saldo é de R$${this.clientes[i].saldo}`)
                    // console bonus
            } 

        }

    

        
    },

    sacar(titular, dinheiro){

        for (i = 0; i < this.clientes.length; i++) {
            
            if (titular == this.clientes[i].titular) {
                    // console bonus
                    console.log(`Saldo Atual: R$${this.clientes[i].saldo}`)
                    console.log(`Processando saque de R$${dinheiro}...`)
                    // fim do console bonus

                    cliente = this.clientes[i].saldo -= dinheiro
            
                    // console bonus
                    console.log(`Saque realizado Sr. ${this.clientes[i].titular}! Seu novo saldo é de R$${this.clientes[i].saldo}`)
                    // fim do bonus
            } 

        }
    }

}

// Consultar Cliente
// console.log(banco.consultarCliente('Jacki Shurmer'))

// Depositar Dinheiro
// banco.depositar('Jacki Shurmer', 600)

// Sacar Dinheiro
// banco.sacar('Jacki Shurmer', 1000)