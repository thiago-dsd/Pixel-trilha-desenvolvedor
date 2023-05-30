// F - Crie sua função aqui
function uppercaseArray (lista){
    let listaElemMaiusc = lista.map(transfEmMaiusculo);
    function transfEmMaiusculo (elementoAtual){
        return elementoAtual.toUpperCase();
    }
    return listaElemMaiusc;
}
// Não altere as linhas abaixo
console.log(uppercaseArray(['pixel', 'Trainee', 'trilha dev']))


/*
ALTERNATIVA PENSADA DURANTE A RESOLUÇÃO

var alfabeto = {
    'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K',
    'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z'
}
function uppercaseArray (palavra){
    for (var i = 0; i < palavra.split().lenght; i++){
        console.log(palavra[i])
    }
}

*/