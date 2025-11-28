// 35. Peça um número de 1 a 5 e mostre o nome de uma fruta correspondente.

// Pede um número de 1 a 5
let numero = parseInt(prompt("Digite um número de 1 a 5 para escolher uma fruta:"));

// Inicializa variável da fruta
let fruta = "";

// Verifica o número
switch (numero) {
    case 1:
        fruta = "Maçã";
        break;
    case 2:
        fruta = "Banana";
        break;
    case 3:
        fruta = "Laranja";
        break;
    case 4:
        fruta = "Uva";
        break;
    case 5:
        fruta = "Pera";
        break;
    default:
        fruta = "Opção inválida";
        break;
}

// Mostra o resultado
alert("Fruta selecionada: " + fruta);
