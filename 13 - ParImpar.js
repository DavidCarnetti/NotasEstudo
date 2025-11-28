// Pegar o exercicio no GitHub e colocar aqui
//  13. Peça um número inteiro e diga se ele é par ou ímpar. 
// (Dica: se o número dividido por 2 tiver resto 0, é par)

// Entrada
// Sempre colocarmos variaveis, dos tipos:
// 'const' ante - algo fixo
// let - não fixo
// ver - erro - n use


// explicar do que se trata ao usuario
// pedir info para o usuario usando prompt
// explicar dentro do prompt do que se trata a solicitação
// deixar bem detalhado o que precisa 


const num = Number(prompt('Digite um numero, irei validar se é par ou impar:'))

// Processamento
// Normalmente vem um calculo aqui
// Pode tambem ser usado variavel
// Fazer um calculo (essa em especifico"fazer divisão e pegar o resto")
const resto = numero % 2



// Saida
// Mostra o resultado
// Com comando Alert()
if (resto == 0) {
    alert("O numero informado é par")

} else {
    alert('O numero informado é impar')
}




// else pega tudo que esta acima
