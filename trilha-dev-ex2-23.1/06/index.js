// Crie sua função aqui
function factorial (num){
    var produto = 1;
    for (num; num >= 2; num--){
        produto *= num
    }
    return produto;
}

// Não altere as linhas abaixo
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(8))