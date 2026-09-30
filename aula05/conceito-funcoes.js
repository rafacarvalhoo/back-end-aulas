// FUNÇÕES EM JAVASCRIPT

// O que é uma funcção?
// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica. 

// Analogia SIMPLES!
// Você vai colocar valores (paramêtros)
// Ela processa
// E no final, desenvolve um resultado (return)

// ---------------------------------------------
// Estrutura básica de uma função
// ---------------------------------------------

//  function nomeDaFuncao (parametro1, parametro2) {
//     // código que será executado
//     return resultado;
//     }

// function ---> palavra-chave
// nomeDaFuncao --> nome da função
// paramêtros ---> valores que a função recebe 
// return ---> valor que a função devolve 

// 5 EXEMPLOS

// 1- Somar dois números

function somar (a, b) {
    return a + b;
}
console.log (somar (2, 15));

// 2- Converter real para dólar 
function realParaDolar (valorReal, cotacao) {
    return valorReal / cotacao;
}

console.log (realParaDolar (10, 5.20) .toFixed (2));

// 3 - Converter dólar para real
function dolarParaReal (valorDolar, cotacao) {
    return valorDolar * cotacao;
}
console.log (dolarParaReal (5, 5.20));

// 4- Aumento de salário (Você merece 25% de aumento)
    // function aumentoSalario (valorSalario, aumento) {
    //     return valorSalario + (valorSalario * (aumento / 100.0));
    // }

    // console.log (aumentoSalario (2000, 25));
    function calcularAumento (salario) {
        return salario + (salario * 0.25);
    }
    console.log (calcularAumento (2000));

    // 5- Verifique se é par ou ímpar?
   function parouimpar (numero){
    if (numero% 2 === 0){
        return "o numero é par.";
    }else{
            return "o numero é impar.";
        }
    }
console.log (parouimpar(8));
