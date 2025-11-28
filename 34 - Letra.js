// 34. Peça uma letra e informe se ela é vogal ou consoante.

// Pede uma letra ao usuário
let letra = prompt("Digite uma letra:").toLowerCase(); // converte para minúscula

// Verifica se é uma letra válida
if (letra.length === 1 && letra >= 'a' && letra <= 'z') {
    if ("aeiou".includes(letra)) {
        alert("A letra '" + letra + "' é uma vogal.");
    } else {
        alert("A letra '" + letra + "' é uma consoante.");
    }
} else {
    alert("Entrada inválida. Digite apenas uma letra.");
}
