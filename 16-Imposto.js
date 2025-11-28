// Peça o CPF (como número), o número de dependentes e a renda mensal da pessoa. Calcule o valor do imposto de renda com base:

// Desconto de 5% do salário mínimo por dependente

// Alíquotas:

// Até 2 SM → isento
// Até 3 SM → 5%
// Até 5 SM → 10%
// Até 7 SM → 15%
// Acima de 7 SM → 20%
// Desafio 3. Peça três números e diga qual é o menor.

// Desafio 4. Peça um ano e diga se ele é um ano bissexto.

// Pede os dados do usuário
let cpf = prompt("Digite seu CPF (somente números):");
let dependentes = parseInt(prompt("Digite o número de dependentes:"));
let renda = parseFloat(prompt("Digite sua renda mensal:"));

// Salário mínimo (exemplo: R$ 1400,00)
let salarioMinimo = 1400;

// Desconto por dependente
let desconto = dependentes * 0.05 * salarioMinimo;

// Renda ajustada
let rendaAjustada = renda - desconto;

// Calcula o imposto de renda com base na faixa
let imposto = 0;
if (rendaAjustada <= 2 * salarioMinimo) {
    imposto = 0;
} else if (rendaAjustada <= 3 * salarioMinimo) {
    imposto = rendaAjustada * 0.05;
} else if (rendaAjustada <= 5 * salarioMinimo) {
    imposto = rendaAjustada * 0.10;
} else if (rendaAjustada <= 7 * salarioMinimo) {
    imposto = rendaAjustada * 0.15;
} else {
    imposto = rendaAjustada * 0.20;
}

alert("CPF: " + cpf + "\nImposto de Renda a pagar: R$ " + imposto.toFixed(2));

// DESAFIO3

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let n3 = parseFloat(prompt("Digite o terceiro número:"));

let menor = n1;

if (n2 < menor) menor = n2;
if (n3 < menor) menor = n3;

alert("O menor número é: " + menor);

// DESAFIO4

let ano = parseInt(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    alert(ano + " é um ano bissexto.");
} else {
    alert(ano + " não é um ano bissexto.");
}
