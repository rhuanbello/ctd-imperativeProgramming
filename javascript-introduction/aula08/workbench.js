function podeSubir(altura, vemAcompanhado){

    if (altura >= 1.40 && altura <= 2) {
      console.log('Acesso liberado :D');
    } else if (altura < 1.40 && altura >= 1.20 && vemAcompanhado) {
        console.log('Acesso liberado acompanhado ;)')
    } else if (altura < 1.20){
        console.log('Acesso restrito :(')
    } else {
        console.log('Acesso restrito por estar desacompanhado ou ter mais de 2 metros de altura')
    }

}

// Insira sua altura e se está acompanhado abaixo
// podeSubir()

// TESTES ABAIXO

console.log('Tenho 1.10 de Altura e estou acompanhado:')
podeSubir(1.10, true)
console.log('Tenho 1.10 de Altura e não estou acompanhado:')
podeSubir(1.10, false)
console.log('Tenho 1.80 de Altura e estou acompanhado:')
podeSubir(1.80, true)
console.log('Tenho 1.80 de Altura mas não estou acompanhado:')
podeSubir(1.80, false)
console.log('Tenho 1.40 de Altura e não estou acompanhado:')
podeSubir(1.41, false)
console.log('Tenho 1.40 de Altura e não estou acompanhado:')
podeSubir(1.41, true)
console.log('Tenho 1.20 de Altura mas estou acompanhado:')
podeSubir(1.20, true)
console.log('Tenho 1.20 de Altura mas não estou acompanhado :(')
podeSubir(1.20, false)
console.log('Tenho mais de 2 metros de Altura')
podeSubir(3, false)
console.log('E se eu estive acompanhado?')
podeSubir(3, true)