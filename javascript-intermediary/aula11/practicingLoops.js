// Exercícios "Praticando com Loops"
console.log('Crie um loop utilizando for que se repita 5 vezes mostrando no console "Olá Mundo!"')


for (i = 0; i < 5; i++) {
    console.log("Olá Mundo!")
}

// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares
console.log('Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares')

for (i = 1; i <= 10; i+=2) {
    console.log(i)
}

// Crie uma tabuada utilizando For
console.log('Crie uma tabuada utilizando For')

function Multiplicar(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num + ' x ' + i + ' é ' + num * i)

    }

}

Multiplicar(1)
Multiplicar(2)
Multiplicar(3)
Multiplicar(4)
Multiplicar(5)
Multiplicar(6)
Multiplicar(7)
Multiplicar(8)
Multiplicar(9)
Multiplicar(10)