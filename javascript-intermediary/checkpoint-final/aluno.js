function Aluno (nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function calcularMedia() {
        return (this.notas.reduce((a, b) => a + b)) / this.notas.length

    };
    this.acrescentaFaltas = function acrescentaFaltas(){
        this.faltas++
    }

}

module.exports = Aluno;