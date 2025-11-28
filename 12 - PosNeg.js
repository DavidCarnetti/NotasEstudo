// 12. Peça um número e informe se ele é positivo ou negativo.

let numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}
