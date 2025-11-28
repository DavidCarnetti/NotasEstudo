// 28. Peça 10 números e diga quantos deles são negativos.

let negativos = 0;
let positivos = 0;
let pares = 0;
let multiplos7 = 0;

// Pede 10 números
for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Digite o número " + i + ":"));

    // Verifica negativos e positivos
    if (numero < 0) {
        negativos++;
    } else if (numero > 0) {
        positivos++;
    }

    // Verifica pares
    if (numero % 2 === 0) {
        pares++;
    }

    // Verifica múltiplos de 7
    if (numero % 7 === 0) {
        multiplos7++;
    }
}

// Mostra os resultados
alert(
    "Números negativos: " + negativos + "\n" +
    "Números positivos: " + positivos + "\n" +
    "Números pares: " + pares + "\n" +
    "Múltiplos de 7: " + multiplos7
);

// DESAFIO 6

let n = parseInt(prompt("Digite a quantidade de termos da sequência de Fibonacci:"));

let fib = [];

for (let i = 0; i < n; i++) {
    if (i === 0) {
        fib.push(0);
    } else if (i === 1) {
        fib.push(1);
    } else {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
}

alert("Sequência de Fibonacci até o " + n + "º termo:\n" + fib.join(", "));


// DESAFIO 7

let fib10 = [];

for (let i = 0; i < 10; i++) {
    if (i === 0) {
        fib10.push(0);
    } else if (i === 1) {
        fib10.push(1);
    } else {
        fib10.push(fib10[i - 1] + fib10[i - 2]);
    }
}

alert("Sequência de Fibonacci até o 10º termo:\n" + fib10.join(", "));
