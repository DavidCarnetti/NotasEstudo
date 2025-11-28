// Peça dois números e diga qual é o maior.
// Pede os dois números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Compara os números e mostra qual é o maior
if (numero1 > numero2) {
    alert("O maior número é: " + numero1);
} else if (numero2 > numero1) {
    alert("O maior número é: " + numero2);
} else {
    alert("Os dois números são iguais.");
}
