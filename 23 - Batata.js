// 23. Enquanto o usuário digitar o número 1, continue mostrando a palavra "Batata".

let numero = 1; // inicializa com 1 para entrar no loop

while (numero === 1) {
    alert("Batata");
    numero = parseInt(prompt("Digite 1 para continuar ou outro número para sair:"));
}

alert("Fim do programa.");
