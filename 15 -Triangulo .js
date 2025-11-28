// Peça três valores e verifique se eles podem formar um triângulo. 
//    Se sim, peça a base e a altura e calcule a área do triângulo. 
//    Se não puderem formar um triângulo, mostre os valores lidos.

// Pede os três lados do triângulo
let a = parseFloat(prompt("Digite o primeiro lado:"));
let b = parseFloat(prompt("Digite o segundo lado:"));
let c = parseFloat(prompt("Digite o terceiro lado:"));

// Função para verificar se os lados formam um triângulo
function formaTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

// Verifica se os lados podem formar um triângulo
if (formaTriangulo(a, b, c)) {
    // Pede a base e a altura para calcular a área
    let base = parseFloat(prompt("Digite a base do triângulo:"));
    let altura = parseFloat(prompt("Digite a altura do triângulo:"));

    let area = (base * altura) / 2;
    alert("Os lados formam um triângulo.\nA área do triângulo é: " + area);
} else {
    alert("Não é possível formar um triângulo com os valores:\n" + a + ", " + b + ", " + c);
}
