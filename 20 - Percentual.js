// // 20. Peça os seguintes dados:

// Percentual do IPI
// Código, valor e quantidade de duas peças Calcule o valor total a ser pago com o IPI. Fórmula:   Total = (valor1 × quant1 + valor2 × quant2) × (1 + IPI / 100)

// Pede o percentual do IPI
let ipi = parseFloat(prompt("Digite o percentual do IPI (ex: 10 para 10%):"));

// Pede dados da primeira peça
let codigo1 = prompt("Digite o código da primeira peça:");
let valor1 = parseFloat(prompt("Digite o valor da primeira peça:"));
let quant1 = parseInt(prompt("Digite a quantidade da primeira peça:"));

// Pede dados da segunda peça
let codigo2 = prompt("Digite o código da segunda peça:");
let valor2 = parseFloat(prompt("Digite o valor da segunda peça:"));
let quant2 = parseInt(prompt("Digite a quantidade da segunda peça:"));

// Calcula o valor total com IPI
let total = (valor1 * quant1 + valor2 * quant2) * (1 + ipi / 100);

// Mostra o resultado
alert(
    "Código peça 1: " + codigo1 + "\n" +
    "Código peça 2: " + codigo2 + "\n" +
    "Valor total a pagar com IPI: R$ " + total.toFixed(2)
);
