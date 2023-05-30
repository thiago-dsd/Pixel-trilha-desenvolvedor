// F Crie sua função aqui
function sumIsEven (a, b) {
    if (a+b % 2 == 0)
        return true;
    else
        return false;
}
// Não altere as linhas abaixo
console.log(sumIsEven(2, 3) ? '2 + 3 é par' : '2 + 3 é ímpar')
console.log(sumIsEven(0, 46) ? '0 + 46 é par' : '0 + 46 é ímpar')
console.log(sumIsEven(9, 12) ? '9 + 12 é par' : '9 + 12 é ímpar')
console.log(sumIsEven(14, 88) ? '14 + 88 é par' : '14 + 88 é ímpar')