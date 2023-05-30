// Crie sua função aqui
function secondBiggestNumber (listaDeNumeros){
    if (listaDeNumeros.length < 2){
        return null;
    } else {
        return listaDeNumeros.sort().reverse()[1]
    }
}

// Não altere as linhas abaixo
console.log(secondBiggestNumber([0, 1, 2, 3, 4, 5]))
console.log(secondBiggestNumber([-1, 10, 20, 30, -10]))
console.log(secondBiggestNumber([100]))

/*
    1.a) É possível usar índices negativos em arrays do Javascript? Como
    é feito python?
*/