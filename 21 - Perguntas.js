// // 21. Faça 8 perguntas sobre um crime (veja lista abaixo). Com base nas respostas positivas, classifique a pessoa como:

// 4 respostas “sim” → Suspeito
// 5 a 7 respostas “sim” → Possível criminoso
// 8 respostas “sim” → Assassino
// Menos de 4 respostas “sim” → Inocente

// Perguntas:

// 1. Trocou mensagens com a vítima?
// 2. Esteve no local do crime?
// 3. Mora perto da vítima?
// 4. Devia dinheiro para a vítima?
// 5. Trabalha ou já trabalhou com a vítima?
// 6. Tinha relacionamento amoroso com a vítima?
// 7. Ficou feliz com o que aconteceu?
// 8. Possui arma de fogo?

// Lista de perguntas atualizada
let perguntas = [
    "Trocou mensagens com a vítima?",
    "Esteve no local do crime?",
    "Mora perto da vítima?",
    "Devia dinheiro para a vítima?",
    "Trabalha ou já trabalhou com a vítima?",
    "Tinha relacionamento amoroso com a vítima?",
    "Ficou feliz com o que aconteceu?",
    "Possui arma de fogo?"
];

let respostasSim = 0;

// Faz as perguntas
for (let i = 0; i < perguntas.length; i++) {
    let resposta = prompt(perguntas[i] + " (sim/não)").toLowerCase();
    if (resposta === "sim") {
        respostasSim++;
    }
}

// Classificação com base no número de respostas "sim"
let classificacao = "";

if (respostasSim === 8) {
    classificacao = "Assassino";
} else if (respostasSim >= 5 && respostasSim <= 7) {
    classificacao = "Possível criminoso";
} else if (respostasSim === 4) {
    classificacao = "Suspeito";
} else {
    classificacao = "Inocente";
}

// Mostra o resultado
alert("Número de respostas 'sim': " + respostasSim + "\nClassificação: " + classificacao);
