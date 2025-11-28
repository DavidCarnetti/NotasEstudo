// // 30. Preencha um array com 5 números aleatórios, obedecendo aos intervalos:

// 1º número entre 1 e 8
// 2º número entre 9 e 16
// 3º número entre 17 e 22
// 4º número entre 23 e 28
// 5º número entre 24 e 29
// Desafio 8. Leia uma lista de notas de alunos. Mostre:

// Maior nota
// Menor nota
// Média das notas
// Números de chamada dos alunos com maior e menor nota (posição no array)

let array5 = [];

// 1º número: 1 a 8
array5.push(Math.floor(Math.random() * 8) + 1);

// 2º número: 9 a 16
array5.push(Math.floor(Math.random() * 8) + 9);

// 3º número: 17 a 22
array5.push(Math.floor(Math.random() * 6) + 17);

// 4º número: 23 a 28
array5.push(Math.floor(Math.random() * 6) + 23);

// 5º número: 24 a 29
array5.push(Math.floor(Math.random() * 6) + 24);

alert("Array com 5 números aleatórios em intervalos específicos:\n" + array5.join(", "));


// DESAFIO 8

let qtdAlunos = parseInt(prompt("Quantos alunos serão cadastrados?"));
let notas = [];

// Pede as notas
for (let i = 0; i < qtdAlunos; i++) {
    let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + ":"));
    notas.push(nota);
}

// Inicializa variáveis
let maior = notas[0];
let menor = notas[0];
let soma = 0;
let posMaior = 0;
let posMenor = 0;

// Percorre as notas
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    if (notas[i] > maior) {
        maior = notas[i];
        posMaior = i + 1; // número de chamada
    }
    if (notas[i] < menor) {
        menor = notas[i];
        posMenor = i + 1;
    }
}

// Calcula média
let media = soma / qtdAlunos;

// Mostra resultados
alert(
    "Maior nota: " + maior + " (Aluno " + posMaior + ")\n" +
    "Menor nota: " + menor + " (Aluno " + posMenor + ")\n" +
    "Média das notas: " + media.toFixed(2)
);


