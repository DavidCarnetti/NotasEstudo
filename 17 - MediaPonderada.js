// 17. Peça três notas e calcule a média ponderada, usando os pesos 2, 3 e 5.

// Pede as três notas
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Define os pesos
let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

// Calcula a média ponderada
let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

alert("A média ponderada é: " + mediaPonderada.toFixed(2));

