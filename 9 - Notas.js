// 9. Peça três notas de um aluno, calcule a média e informe:

let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (n1 + n2 + n3) / 3;
let mensagem = "";

if (media >= 7) {
    mensagem = `Média: ${media.toFixed(2)} - Aprovado`;
} else if (media >= 5) {
    mensagem = `Média: ${media.toFixed(2)} - Recuperação`;
} else {
    mensagem = `Média: ${media.toFixed(2)} - Reprovado`;
}

alert(mensagem);