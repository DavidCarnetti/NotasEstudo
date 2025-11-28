// 31. Peça um número de 1 a 3 e mostre o tipo de combustível correspondente: 1 → Álcool 2 → Gasolina 3 → Diesel

// Pede um número de 1 a 3
let escolha = parseInt(prompt("Digite um número de 1 a 3:\n1 → Álcool\n2 → Gasolina\n3 → Diesel"));

let combustivel = "";

// Verifica a escolha
if (escolha === 1) {
    combustivel = "Álcool";
} else if (escolha === 2) {
    combustivel = "Gasolina";
} else if (escolha === 3) {
    combustivel = "Diesel";
} else {
    combustivel = "Opção inválida";
}

// Mostra o resultado
alert("Combustível selecionado: " + combustivel);
