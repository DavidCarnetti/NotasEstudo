// 27. Simule um elevador. Cada pessoa que entra informa seu peso. Quando o peso total atingir 180 kg, o elevador informa que atingiu o peso máximo.

let pesoMaximo = 180;
let pesoTotal = 0;
let pessoa = 1;

while (true) {
    let peso = parseFloat(prompt("Digite o peso da pessoa " + pessoa + " (em kg):"));

    // Verifica se o próximo peso ultrapassa o limite
    if (pesoTotal + peso > pesoMaximo) {
        alert("Peso máximo atingido! O elevador não pode receber essa pessoa.");
        break;
    }

    pesoTotal += peso;
    alert("Peso total atual: " + pesoTotal.toFixed(2) + " kg");

    pessoa++;
}

alert("Fim da simulação. Peso total no elevador: " + pesoTotal.toFixed(2) + " kg");
