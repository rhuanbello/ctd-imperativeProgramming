let idade = 19; // variavel idade com valor tipo number 19
let acesso = ''; // variavel acesso sem valor tipo strng

if (idade < 16) { // condicional simples de idade menor que 16
	acesso = 'Acesso proibido'; // caso seja true, variavel acesso recebe valor 'Acesso proibido'
} else if (idade >= 16 && idade <= 18){ // segunda condicional, caso idade for maior ou igual a 16 e menor ou igual a 18
	acesso = 'Acesso liberado somente com acompanhante maior de idade'; // caso seja true, variavel acesso recebe valor 'Acesso liberado somente com acompanhante maior de idade'
} else { // condicional para caso nenhuma condição acima seja true
	acesso = 'Acesso liberado'; // caso seja true, variavel acesso recebe valor 'Acesso liberado'
}

console.log(acesso) // retorna no console a variavel acesso com a string recebida 

{

    let dia = "tá lindo"
    let clima = "ensolarado"

    if (dia == "tá lindo" && clima == "ensolarado") {
        function vidaLoucaPozedoRodo(){
            return "Clima de piscina, cervejinha e churrasco"
        }
    }

    console.log(vidaLoucaPozedoRodo())

}

let dia = "quarta";

if (dia == "domingo"){
	console.log("Vou para praia!")
    } else if (dia == "Sábado"){
		console.log("Amanhã irei para praia")
    } else {
    console.log("Não irei para praia")
    }