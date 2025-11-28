// 26. Peça o peso de 5 pessoas e calcule a média dos pesos.

let somaPesos = 0;

// Loop para pedir o peso de 5 pessoas
for (let i = 1; i <= 5; i++) {
    let peso = parseFloat(prompt("Digite o peso da pessoa " + i + " (em kg):"));
    somaPesos += peso;
}

// Calcula a média dos pesos
let mediaPesos = somaPesos / 5;

// Mostra o resultado
alert("A média dos pesos é: " + mediaPesos.toFixed(2) + " kg");
