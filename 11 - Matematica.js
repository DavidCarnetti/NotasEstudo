// 11. Peça dois números e uma operação matemática (+, -, *, /). Calcule e mostre o resultado da operação escolhida.

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let op = prompt("Digite a operação (+, -, *, /):");

let resultado;

switch (op) {
    case "+":
        resultado = n1 + n2;
        break;
    case "-":
        resultado = n1 - n2;
        break;
    case "*":
        resultado = n1 * n2;
        break;
    case "/":
        if (n2 !== 0) {
            resultado = n1 / n2;
        } else {
            alert("Erro: divisão por zero!");
        }
        break;
    default:
        alert("Operação inválida!");
}

if (resultado !== undefined) {
    alert(`Resultado: ${resultado}`);
}
