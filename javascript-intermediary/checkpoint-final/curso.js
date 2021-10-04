const estudantes = require('./estudantes')
const Aluno = require('./aluno')

const curso = {
    nomedoCurso: 'Programação Imperativa',
    notadeAprovacao: 7,
    faltasMaximas: 5,
    listaDeEstudantes: estudantes,

    adicionarAluno(nome, faltas, notas){
        this.listaDeEstudantes.push(new Aluno(nome, faltas, notas))

    },

    aprovacaoAluno(aluno){

        if (aluno.calcularMedia() >= this.notadeAprovacao && aluno.faltas < this.faltasMaximas) {
            return true
            
        } else if (aluno.faltas === this.faltasMaximas && aluno.calcularMedia() > (this.notadeAprovacao + (this.notadeAprovacao * 0.10))) {
            return true
    
        } else {
            return false
    
        }

    },
    
    listaAprovados(){
        
    // bônus abaixo
    this.listaDeEstudantes.forEach(aluno => {
            if (this.aprovacaoAluno(aluno)) {
                console.log(`O aluno ${aluno.nome} foi APROVADO no curso ${this.nomedoCurso} com a média ${aluno.calcularMedia()} e ${aluno.faltas} faltas`)
            } else {
                console.log(`O aluno ${aluno.nome} foi REPROVADO no curso ${this.nomedoCurso} com a média ${aluno.calcularMedia()} e ${aluno.faltas} faltas`)
            }
    })
        
    let aprovados = [];
        this.listaDeEstudantes.forEach(aluno => {
            aprovados.push(this.aprovacaoAluno(aluno))

        })

        return aprovados
       
    }

}

// TESTES:

// // ADICIONAR NOVO ALUNO
curso.adicionarAluno('Matheus', 3, [7, 8, 3, 5])

// // ACRESCENTAR FALTA AO ALUNO
curso.listaDeEstudantes[0].acrescentaFaltas()

// // CHECAR SE ALUNO É APROVADO OU REPROVADO INDIVIDUALMENTE
// console.log(curso.aprovacaoAluno(curso.listaDeEstudantes[0]))

// VER LISTA DE APROVADOS
console.log(curso.listaAprovados())



