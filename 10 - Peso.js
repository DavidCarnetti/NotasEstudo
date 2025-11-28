// 10. Peça o sexo da pessoa (H para homem, M para mulher) e a altura. Use as fórmulas para calcular o peso ideal:
// Homens: (72.7 × altura) - 58
// Mulheres: (62.1 × altura) - 44.7

let sexo = prompt("Digite o sexo (H para homem, M para mulher):").toUpperCase();
let altura = parseFloat(prompt("Digite a altura em metros:"));

let pesoIdeal;

if (sexo === "H") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "M") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    alert("Sexo inválido!");
}

if (pesoIdeal !== undefined) {
    alert(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
}
