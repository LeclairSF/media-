
var estudantes = [
    { nome: "João", notaProva1: 8, notaProva2: 7 },
    { nome: "Maria", notaProva1: 7, notaProva2: 6 },
    { nome: "Pedro", notaProva1: 6, notaProva2: 8 },
    { nome: "Ana", notaProva1: 9, notaProva2: 9 },
];


function calcularMedia(notaProva1, notaProva2) {
    return (notaProva1 + notaProva2) / 2;
}


function verificarSucesso(aluno) {
    var media = calcularMedia(aluno.notaProva1, aluno.notaProva2);
    if (media >= 7) {
        alert(aluno.nome + " passou de ano com sucesso e com média " + media);
    } else {
        alert(aluno.nome + " passou de ano com sucesso e com média " + media);
    }
}


estudantes.forEach(verificarSucesso);