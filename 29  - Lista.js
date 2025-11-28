// 29. Preencha uma lista (array) com 15 números aleatórios.

// Cria um array vazio
let numeros = [];

// Preenche o array com 15 números aleatórios entre 0 e 100
for (let i = 0; i < 15; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 101); // 0 a 100
    numeros.push(numeroAleatorio);
}

// Mostra o array
alert("Array com 15 números aleatórios:\n" + numeros.join(", "));
