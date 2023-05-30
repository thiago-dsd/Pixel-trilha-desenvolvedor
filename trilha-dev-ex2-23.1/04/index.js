// F Crie sua função aqui
function oneToNumber (num){
    //criando uma lista para armazenar os valores
    let list = []
    //iniciando em 1, somando 1 a cada ciclo e adicionando o elemento do cliclo na lista
    for (var i = 1; i <= num; i++){
        list.push(i)
    }
    //retornando a lista
    return list;
}

// Não altere as linhas abaixo
console.log(oneToNumber(10))
console.log(oneToNumber(5))
console.log(oneToNumber(1))
console.log(oneToNumber(-1))