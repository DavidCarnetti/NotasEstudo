// 18. Peça o custo de fábrica de um carro. Calcule o valor final ao consumidor, considerando:

// 28% de lucro para o distribuidor
// 45% de impostos

// Pede o custo de fábrica
let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

// Percentuais
let lucroDistribuidor = 0.28; // 28%
let impostos = 0.45;           // 45%

// Calcula o valor final
let valorFinal = custoFabrica * (1 + lucroDistribuidor + impostos);

alert("O valor final ao consumidor é: R$ " + valorFinal.toFixed(2));
