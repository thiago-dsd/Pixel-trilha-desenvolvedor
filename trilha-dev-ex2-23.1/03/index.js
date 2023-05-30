// F

function biggestNumber (lista){
    let maiorNumero = lista[0];
    lista.forEach(element => {
        if (element > maiorNumero){
            maiorNumero = element
        }
    });
    return maiorNumero
}
console.log(biggestNumber([0, 1, 2, 3, 4, 5]))
console.log(biggestNumber([9, 4, 6, -1, 5, 8]))
console.log(biggestNumber([-1, 7, 10, -10, 100]))
console.log(biggestNumber([10, 9, 8, 7, 6, 5]))


/*
TENTEI AS DUAS SOLUÇÕES ABAIXO, MAS NENHUMA DELAS SURTIU O EFEITO DESEJADO

SOLUÇÃO 1 
function biggestNumber (lista){
    var maiorNumero = lista[0];
    for (let i = 0; i < lista.lenght; i++){
        if (lista[i] > maiorNumero){
            maiorNumero = lista[i];
        }
    }
    return maiorNumero;
} 

SOLUÇÃO 2
function compare (a, b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
function biggestNumber (listaDeNumeros){
    return listaDeNumeros[listaDeNumeros.length - 1];
}
*/