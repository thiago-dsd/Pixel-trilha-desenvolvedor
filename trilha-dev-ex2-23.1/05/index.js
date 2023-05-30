// F Crie sua função aqui
function evenArray (num){
    //é o mesmo princípio da anterior
    let list = []
    for (i = 0; i <= num; i += 2){
        list.push(i)
    }
    return list;
}

// Não altere as linhas abaixo
console.log(evenArray(10))
console.log(evenArray(5))
console.log(evenArray(1))
console.log(evenArray(-1))