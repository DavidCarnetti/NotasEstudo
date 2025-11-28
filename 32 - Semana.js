// 32. Peça um número de 1 a 7 e mostre o dia da semana correspondente.
//  1 → Domingo, 2 → Segunda, etc.

// Pede um número de 1 a 7
let numero = parseInt(prompt("Digite um número de 1 a 7 para o dia da semana:"));

// Inicializa variável do dia
let diaSemana = "";

// Verifica o número
switch (numero) {
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Segunda-feira";
        break;
    case 3:
        diaSemana = "Terça-feira";
        break;
    case 4:
        diaSemana = "Quarta-feira";
        break;
    case 5:
        diaSemana = "Quinta-feira";
        break;
    case 6:
        diaSemana = "Sexta-feira";
        break;
    case 7:
        diaSemana = "Sábado";
        break;
    default:
        diaSemana = "Opção inválida";
        break;
}

// Mostra o resultado
alert("Dia da semana: " + diaSemana);

