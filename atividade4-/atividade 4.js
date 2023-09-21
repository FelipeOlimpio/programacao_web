
function Aluno(nome) {
    this.nome = nome;
    this.notas = [];

 
    this.incluirNota = function(nota) {
        this.notas.push(nota);
    };

    
    this.calcularMedia = function() {
        const totalNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
        return totalNotas / this.notas.length;
    };

    
    this.verificarAprovacao = function(callback) {
        const media = this.calcularMedia();
        callback(media);
    };
}


function verificarAprovacao(media) {
    if (media >= 6) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }
}


const aluno1 = new Aluno("João");


for (let i = 1; i <= 3; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i} para ${aluno1.nome}:`));
    if (!isNaN(nota)) {
        aluno1.incluirNota(nota);
    } else {
        console.log("Por favor, insira uma nota válida.");
        i--; 
    }
}


aluno1.verificarAprovacao(verificarAprovacao);
