// 22. Peça a velocidade permitida na via e a velocidade que o motorista estava. Calcule a multa:

// Até 20% acima → R$ 102,00
// Mais de 20% acima → R$ 500,00

// Pede a velocidade permitida e a velocidade do motorista
let velPermitida = parseFloat(prompt("Digite a velocidade permitida na via (km/h):"));
let velMotorista = parseFloat(prompt("Digite a velocidade que o motorista estava (km/h):"));

// Calcula o percentual de excesso
let excesso = velMotorista - velPermitida;
let percentual = (excesso / velPermitida) * 100;

// Determina a multa
let multa = 0;

if (excesso <= 0) {
    multa = 0; // sem excesso, sem multa
} else if (percentual <= 20) {
    multa = 102;
} else {
    multa = 500.003;
}

// Mostra o resultado
if (multa === 0) {
    alert("Sem multa. O motorista estava dentro do limite.");
} else {
    alert("Velocidade permitida: " + velPermitida + " km/h\n" +
        "Velocidade do motorista: " + velMotorista + " km/h\n" +
        "Percentual acima do limite: " + percentual.toFixed(2) + "%\n" +
        "Valor da multa: R$ " + multa.toFixed(2));
}

