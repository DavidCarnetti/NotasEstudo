// 25. Peça quantas pessoas serão cadastradas. Depois, peça a altura de cada uma e calcule a média das alturas.

// Pede quantas pessoas serão cadastradas
let totalPessoas = parseInt(prompt("Digite o número de pessoas a serem cadastradas:"));

let somaAlturas = 0;

// Loop para pedir a altura de cada pessoa
for (let i = 1; i <= totalPessoas; i++) {
    let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros):"));
    somaAlturas += altura;
}

// Calcula a média das alturas
let mediaAlturas = somaAlturas / totalPessoas;

// Mostra o resultado
alert("A média das alturas é: " + mediaAlturas.toFixed(2) + " metros");
