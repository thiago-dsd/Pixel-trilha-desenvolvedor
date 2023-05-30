// F Crie sua função aqui
function invertWord (palavra){
    //usei a função split para separa a string
    //reverse para inverter
    //depois juntei com o join
    return palavra.split('').reverse().join('');
}

// Não altere as linhas abaixo
console.log(invertWord('javascript'))
console.log(invertWord('web'))
console.log(invertWord('pixel'))
console.log(invertWord('trainee'))