// 19. Peça o valor de um capital inicial, a taxa de juros (em formato decimal, como 0.05) e o tempo em dias. Mostre:

// Capital
// Juros
// Montante (capital + juros)



// Pede os dados ao usuário
let capital = parseFloat(prompt("Digite o capital inicial:"));
let taxa = parseFloat(prompt("Digite a taxa de juros (em decimal, ex: 0.05):"));
let tempo = parseFloat(prompt("Digite o tempo em dias:"));

// Calcula os juros simples
let juros = capital * taxa * tempo;

// Calcula o montante
let montante = capital + juros;

// Mostra os resultados
alert(
  "Capital inicial: R$ " + capital.toFixed(2) + "\n" +
  "Juros: R$ " + juros.toFixed(2) + "\n" +
  "Montante: R$ " + montante.toFixed(2)
);
