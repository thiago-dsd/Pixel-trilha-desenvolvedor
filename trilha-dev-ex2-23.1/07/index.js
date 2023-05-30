// F - Crie sua função aqui
function sumArray (lista){
    var valorInicial = 0;
    var somador = lista.reduce(
        //o acumulador é somado ao valor Atual e o valor resultante da soma
        //se tornar o próximo valor inical, repetindo a operação de 2 em 2
       (acumulador, valorAtual) => acumulador + valorAtual, valorInicial 
    );
    return somador;
}

// Não altere as linhas abaixo
console.log(sumArray([0, 1, 2, 3, 4, 5]))
console.log(sumArray([-1, 10, 20, 30, -10]))
console.log(sumArray([0, 7, 4, 3, 9, 0, 0]))
console.log(sumArray([-7, -4, -3, -9]))