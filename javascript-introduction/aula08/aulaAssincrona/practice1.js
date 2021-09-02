function valorStatus(status){
	if (status) {
		console.log(`Status é ${status}`)
	} else {
		console.log(`Status é ${status}`)
	}

}

valorStatus(false)

{

	let linguagem = ""

	if (linguagem){
			console.log("Estou aprendendo")
	} else {
			console.log("Aprenderei mais tarde")
	}

}

{ 

	let linguagem = ""

	linguagem ? console.log("Estou aprendendo") : console.log("Aprenderei mais tarde")

}

let idade = 5 // definido variavel idade com valor number 5

switch (idade) { // inicio da condicional com switch e a expressão/condição a ser avaliada
	case 10: // case variavel = 10
		console.log('Tem 10 anos'); 
		break;
	case 5: // case variavel = 5
		console.log('Tem 5 anos') // imprimira pois variavel = 5 é true
		break; //encerra o código
}

let fruta = 'wefwef'; 
switch (fruta) {
	case 'banana':
		console.log('Uma fruta amarela');
		break;
	case 'laranja':
		console.log('Bem ácida');
		break;
	default:
		console.log('Sem fruta');
}