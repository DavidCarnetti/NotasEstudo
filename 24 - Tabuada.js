// 24. Peça um número e mostre a tabuada dele (de 0 a 10).

// Pede o número ao usuário
let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

// Cria uma string para armazenar a tabuada
let tabuada = "";

// Loop de 0 a 10
for (let i = 0; i <= 10; i++) {
    tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
}

// Mostra a tabuada
alert("Tabuada do " + numero + ":\n" + tabuada);
